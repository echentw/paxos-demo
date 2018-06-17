import { assert, expect, should } from 'chai';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  ChosenValueResponse,
} from '../src/lib/message_types';

import PaxosNode from '../src/lib/paxos_node';


describe('PaxosNode', () => {
  let nodes: Array<PaxosNode>;

  beforeEach(() => {
    nodes = [
      new PaxosNode(0, 5),
      new PaxosNode(1, 5),
      new PaxosNode(2, 5),
      new PaxosNode(3, 5),
      new PaxosNode(4, 5),
    ];
    nodes.forEach((node) => node.initializeNodeIds(nodes.map((node) => node.getId())));
  });

  describe('Proposer', () => {
    describe('Phase 1', () => {
      it('should send a prepare message to everyone', () => {
        const requests: Array<Message> = nodes[0].generatePrepareRequests('juicy juicy burger');
        assert.lengthOf(requests, 4);
        assert.hasAllKeys(new Set(requests.map(r => r.toNode)), nodes.slice(1, 5));
      });

      it('should generate a new higher proposal number', () => {
        const message: PrepareStageRequest = {
          kind: 'PrepareStageRequest',
          toNode: nodes[0],
          fromNode: nodes[1],
          proposalNumber: 123,
        };

        const responses: Array<Message> = nodes[0].receivePrepareRequest(message);
        assert.lengthOf(responses, 1);

        const requests: Array<Message> = nodes[0].sendPrepareRequest('french fries');
        assert.lengthOf(requests, 4);
        requests.forEach((message: PrepareStageRequest) => {
          assert.equal('PrepareStageRequest', message.kind);
          assert(message.proposalNumber > 123);
        });
      });
    });

    describe('Phase 2', () => {
      let proposalNumber: number;
      let responses: Array<Message>;

      beforeEach(() => {
        let requests = nodes[0].sendPrepareRequest('milkshake');
        assert.lengthOf(requests, 4);

        proposalNumber = (<PrepareStageRequest>requests[0]).proposalNumber;

        responses = requests.map((request) => {
          const receiver = request.toNode;
          const responses = receiver.receiveMessage(request);
          assert.lengthOf(responses, 1);
          return responses[0];
        });
        assert.equal(4, responses.length);

        requests = nodes[0].receiveMessage(responses[0]);
        assert.lengthOf(requests, 0);
      });

      it('should initiate after receiving from a majority', () => {
        const requests = nodes[0].receiveMessage(responses[1]);
        assert.lengthOf(requests, 4);
      });

      it('should not initiate if it receives a proposal with a higher number', () => {
        nodes[0].receiveMessage(<PrepareStageResponse>{
          kind: 'PrepareStageResponse',
          proposalNumber: proposalNumber + 1,
        });
        const requests = nodes[0].receiveMessage(responses[1]);
        assert.lengthOf(requests, 0);
      });

      it('should initiate even if it receives a proposal with a lower number', () => {
        nodes[0].receiveMessage(<PrepareStageResponse>{
          kind: 'PrepareStageResponse',
          proposalNumber: proposalNumber - 1,
        });
        const requests = nodes[0].receiveMessage(responses[1]);
        assert.lengthOf(requests, 4);
      });
    });
  });

  describe('Receiver', () => {
    let receiver: PaxosNode;
    let sender: PaxosNode;

    beforeEach(() => {
      receiver = nodes[0];
      sender = nodes[1];
    });

    describe('Phase 1', () => {
      it('should respond with null proposal number', () => {
        const responses = receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 123,
        });
        assert.lengthOf(responses, 1);
        const response = <PrepareStageResponse>responses[0];

        assert.equal(response.proposalNumber, null);
        assert.equal(response.value, null);
      });

      it('should respond with highest seen proposal number', () => {
        receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 80,
        });

        const responses = receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 123,
        });
        assert.lengthOf(responses, 1);
        const response = <PrepareStageResponse>responses[0];
        assert.equal(response.proposalNumber, 80);
        assert.equal(response.value, null);
      });

      it('should respond with higher proposal number', () => {
        receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 300,
        });

        const responses = receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 123,
        });
        assert.lengthOf(responses, 1);
        const response = <PrepareStageResponse>responses[0];
        assert.equal(response.proposalNumber, 300);
        assert.equal(response.value, null);
      });

      it('should respond with lower number and previously accepted value', () => {
        receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 200,
        });
        receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 200,
          value: 'pizza',
        });

        const responses = receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 300,
        });
        assert.lengthOf(responses, 1);
        const response = <PrepareStageResponse>responses[0];
        assert.equal(response.proposalNumber, 200);
        assert.equal(response.value, 'pizza');
      });

      it('should respond with higher number and previously accepted value', () => {
        receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 400,
        });
        receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 400,
          value: 'pizza',
        });

        const responses = receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 300,
        });
        assert.lengthOf(responses, 1);
        const response = <PrepareStageResponse>responses[0];
        assert.equal(response.proposalNumber, 400);
        assert.equal(response.value, 'pizza');
      });
    });

    describe('Phase 2', () => {
      it('should accept the proposal', () => {
        const responses = receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 100,
          value: 'ice cream',
        });
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.proposalNumber, 100);
      });

      it('it should accept the proposal if it received a lower number prepare request', () => {
        receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 200,
        });
        const responses = receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 300,
          value: 'banana pudding',
        });
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.proposalNumber, 300);
      });

      it('it should accept the proposal if it received a lower number accept request', () => {
        receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 200,
          value: 'fried chicken',
        });
        const responses = receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 300,
          value: 'banana pudding',
        });
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.proposalNumber, 300);
      });

      it('it should not accept the proposal if it received a higher number prepare request', () => {
        receiver.receiveMessage(<PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          proposalNumber: 200,
        });
        const responses = receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 100,
          value: 'banana pudding',
        });
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.proposalNumber, 200);
      });

      it('it should not accept the proposal if it received a higher number accept request', () => {
        receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 200,
          value: 'fried chicken',
        });
        const responses = receiver.receiveMessage(<AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          proposalNumber: 100,
          value: 'banana pudding',
        });
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.proposalNumber, 200);
      });
    });
  });

  describe('Learner', () => {
    let learner: PaxosNode;
    let proposalNumber: number;

    beforeEach(() => {
      learner = nodes[0];
      const messages = learner.sendPrepareRequest('steak');
      proposalNumber = (<PrepareStageRequest>messages[0]).proposalNumber;
      learner.sendAcceptRequest();
    });

    describe('Phase 2', () => {
      it('should respond with the chosen value', () => {
        let result = learner.receiveMessage(<AcceptStageResponse>{
          kind: 'AcceptStageResponse',
          proposalNumber: proposalNumber,
        });
        assert.lengthOf(result, 0);

        result = learner.receiveMessage(<AcceptStageResponse>{
          kind: 'AcceptStageResponse',
          proposalNumber: proposalNumber,
        });
        assert.lengthOf(result, 1);

        const response = <ChosenValueResponse>result[0];
        assert.equal(response.value, 'steak');
      });

      it('should only respond with the chosen value once', () => {
        let result = learner.receiveMessage(<AcceptStageResponse>{
          kind: 'AcceptStageResponse',
          proposalNumber: proposalNumber,
        });
        assert.lengthOf(result, 0);

        result = learner.receiveMessage(<AcceptStageResponse>{
          kind: 'AcceptStageResponse',
          proposalNumber: proposalNumber,
        });
        assert.lengthOf(result, 1);

        result = learner.receiveMessage(<AcceptStageResponse>{
          kind: 'AcceptStageResponse',
          proposalNumber: proposalNumber,
        });
        assert.lengthOf(result, 0);

        result = learner.receiveMessage(<AcceptStageResponse>{
          kind: 'AcceptStageResponse',
          proposalNumber: proposalNumber,
        });
        assert.lengthOf(result, 0);
      });
    });
  });
});
