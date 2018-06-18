import { assert, expect, should } from 'chai';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
} from '../src/lib/message_types';

import Proposer from '../src/lib/proposer';


describe('Proposer', () => {
  let proposer: Proposer;
  let receiverIds: Array<number>;

  beforeEach(() => {
    receiverIds = [1, 2, 3, 4, 5];
    proposer = new Proposer(0);
    proposer.initializeReceiverNodeIds(receiverIds);
  });

  describe('generatePrepareRequests', () => {
    it('should send a prepare request to every receiver', () => {
      const requests: Array<PrepareStageRequest> = proposer.generatePrepareRequests('juicy burger', 10);
      assert.lengthOf(requests, receiverIds.length);
      assert.hasAllKeys(new Set(requests.map(r => r.toNodeId)), receiverIds);
    });

    it('should create a higher proposal number than the one passed in', () => {
      const requests1: Array<PrepareStageRequest> = proposer.generatePrepareRequests('french fries', 10);
      assert(requests1[0].proposalNumber > 10);
    });
  });

  describe('receivePrepareRequest', () => {
    let proposalNumber: number;

    beforeEach(() => {
      const requests = proposer.generatePrepareRequests('milk shake', 10);
      assert(proposer.getIsProposing());
      proposalNumber = requests[0].proposalNumber;
    });

    it('should do nothing if the proposal # is lower', () => {
      proposer.receiveMessage(<PrepareStageRequest>{
        kind: 'PrepareStageRequest',
        toNodeId: 0,
        fromNodeId: 123123,
        proposalNumber: proposalNumber - 1,
      });
      assert(proposer.getIsProposing());
    });

    it('should stop proposing if the proposal # is higher', () => {
      proposer.receiveMessage(<PrepareStageRequest>{
        kind: 'PrepareStageRequest',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        proposalNumber: proposalNumber + 1,
      });
      assert(!proposer.getIsProposing());
    });
  });

  describe('receivePrepareResponse', () => {
    let proposalNumber: number;

    beforeEach(() => {
      const requests = proposer.generatePrepareRequests('dinosaur', 10);
      proposalNumber = requests[0].proposalNumber;
    });

    it('should stop proposing if it receives a response with a higher proposal number', () => {
      const messages = proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        highestSeenProposalNumber: proposalNumber + 1,
        previouslyAcceptedValue: null,
      });
      assert(!proposer.getIsProposing());
    });

    it('should not initiate accept phase before it gets quorum', () => {
      const messages1 = proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: null,
      });

      const messages2 = proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123124,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: null,
      });

      assert.lengthOf(messages1, 0);
      assert.lengthOf(messages2, 0);
    });

    it('should initiate accept phase after it gets quorum', () => {
      proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: null,
      });

      proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123124,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: null,
      });

      const messages = proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123125,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: null,
      });

      assert.lengthOf(messages, receiverIds.length);
    });

    it('should propose the previously accepted value with the highest proposal number', () => {
      proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        highestSeenProposalNumber: proposalNumber - 2,
        previouslyAcceptedValue: 'bulbasaur',
      });

      proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123124,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: 'charmander',
      });

      const messages = <Array<AcceptStageRequest>> proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123125,
        highestSeenProposalNumber: proposalNumber - 3,
        previouslyAcceptedValue: 'squirtle',
      });

      assert.lengthOf(messages, receiverIds.length);
      assert(messages[0].proposedValue === 'charmander');
    });

    it('should propose its own value if there are no previously accepted values', () => {
      proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        highestSeenProposalNumber: proposalNumber - 2,
        previouslyAcceptedValue: null,
      });

      proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123124,
        highestSeenProposalNumber: proposalNumber - 1,
        previouslyAcceptedValue: null,
      });

      const messages = <Array<AcceptStageRequest>> proposer.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123125,
        highestSeenProposalNumber: proposalNumber - 3,
        previouslyAcceptedValue: null,
      });

      assert.lengthOf(messages, receiverIds.length);
      assert(messages[0].proposedValue === 'dinosaur');
    });
  });

  describe('receiveAcceptRequest', () => {
    let proposalNumber: number;

    beforeEach(() => {
      const requests = proposer.generatePrepareRequests('dinosaur', 10);
      proposalNumber = requests[0].proposalNumber;
    });

    it('should ignore if the proposal number is lower', () => {
      proposer.receiveMessage(<AcceptStageRequest>{
        kind: 'AcceptStageRequest',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        proposalNumber: proposalNumber - 1,
        proposedValue: 'hello',
      });
      assert(proposer.getIsProposing());
    });

    it('should stop proposing if the proposal number is higher', () => {
      proposer.receiveMessage(<AcceptStageRequest>{
        kind: 'AcceptStageRequest',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        proposalNumber: proposalNumber + 1,
        proposedValue: 'hello',
      });
      assert(!proposer.getIsProposing());
    });
  });

  describe('receiveAcceptResponse', () => {
    it('should ignore', () => {
      const messages = proposer.receiveMessage(<AcceptStageResponse>{
        kind: 'AcceptStageResponse',
        toNodeId: proposer.getId(),
        fromNodeId: 123123,
        highestSeenProposalNumber: 123,
        acceptedValue: 'asdf',
      });
      assert.lengthOf(messages, 0);
    });
  });
});
