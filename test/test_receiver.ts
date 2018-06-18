import { assert, expect, should } from 'chai';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
} from '../src/lib/message_types';

import Receiver from '../src/lib/receiver';


describe('Receiver', () => {
  let receiver: Receiver;
  let senderId: number;

  const createPrepareRequest = (proposalNumber: number) => {
    return <PrepareStageRequest>{
      kind: 'PrepareStageRequest',
      toNodeId: receiver.getId(),
      fromNodeId: senderId,
      proposalNumber: proposalNumber,
    };
  };

  const createAcceptRequest = (proposalNumber: number, proposedValue: string) => {
    return <AcceptStageRequest>{
      kind: 'AcceptStageRequest',
      toNodeId: receiver.getId(),
      fromNodeId: senderId,
      proposalNumber: proposalNumber,
      proposedValue: proposedValue,
    };
  };

  beforeEach(() => {
    receiver = new Receiver(0);
    senderId = 123123;
  });

  describe('receivePrepareRequest', () => {
    describe('when the proposal number is less than the request proposal number', () => {
      describe('when there is an accepted value', () => {
        let highestSeenProposalNumber: number;
        let acceptedValue: string;

        beforeEach(() => {
          highestSeenProposalNumber = 246;
          acceptedValue = 'chicken';
          receiver.receiveMessage(createAcceptRequest(highestSeenProposalNumber, acceptedValue));
        });

        it('should send the proposal number and accepted value', () => {
          const messages = receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber - 1));
          assert.lengthOf(messages, 1);
          const response = <PrepareStageResponse>messages[0];
          assert.equal(response.previouslyHighestSeenProposalNumber, highestSeenProposalNumber);
          assert.equal(response.previouslyAcceptedValue, acceptedValue);
        });

        it('should not update its proposal number', () => {
          const previousHighestSeenProposalNumber = receiver.getHighestSeenProposalNumber();
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber - 1));
          assert.equal(previousHighestSeenProposalNumber, receiver.getHighestSeenProposalNumber());
        });

        it('should keep its accepted value', () => {
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber - 1));
          assert.equal(acceptedValue, receiver.getAcceptedValue());
        });
      });

      describe('when there is not an accepted value', () => {
        let highestSeenProposalNumber: number;

        beforeEach(() => {
          highestSeenProposalNumber = 246;
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber));
        });

        it('should send the proposal number and a null accepted value', () => {
          const messages = receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber - 1));
          assert.lengthOf(messages, 1);
          const response = <PrepareStageResponse>messages[0];
          assert.equal(response.previouslyHighestSeenProposalNumber, highestSeenProposalNumber);
          assert.isNull(response.previouslyAcceptedValue);
        });

        it('should not update its proposal number', () => {
          const previousHighestSeenProposalNumber = receiver.getHighestSeenProposalNumber();
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber - 1));
          assert.equal(previousHighestSeenProposalNumber, receiver.getHighestSeenProposalNumber());
        });
      });
    });

    describe('when the proposal number is greater than the request proposal number', () => {
      describe('when there is an accepted value', () => {
        let highestSeenProposalNumber: number;
        let acceptedValue: string;

        beforeEach(() => {
          highestSeenProposalNumber = 246;
          acceptedValue = 'chicken';
          receiver.receiveMessage(createAcceptRequest(highestSeenProposalNumber, acceptedValue));
        });

        it('should send the proposal number and accepted value', () => {
          const messages = receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber + 1));
          assert.lengthOf(messages, 1);
          const response = <PrepareStageResponse>messages[0];
          assert.equal(response.previouslyHighestSeenProposalNumber, highestSeenProposalNumber);
          assert.equal(response.previouslyAcceptedValue, acceptedValue);
        });

        it('should update its proposal number', () => {
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber + 1));
          assert.equal(highestSeenProposalNumber + 1, receiver.getHighestSeenProposalNumber());
        });

        it('should null out its accepted value', () => {
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber + 1));
          assert.isNull(receiver.getAcceptedValue());
        });
      });

      describe('when there is not an accepted value', () => {
        let highestSeenProposalNumber: number;

        beforeEach(() => {
          highestSeenProposalNumber = 246;
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber));
        });

        it('should send the proposal number and a null accepted value', () => {
          const messages = receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber + 1));
          assert.lengthOf(messages, 1);
          const response = <PrepareStageResponse>messages[0];
          assert.equal(response.previouslyHighestSeenProposalNumber, highestSeenProposalNumber);
          assert.isNull(response.previouslyAcceptedValue);
        });

        it('should update its proposal number', () => {
          receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber + 1));
          assert.equal(highestSeenProposalNumber + 1, receiver.getHighestSeenProposalNumber());
        });
      });
    });
  });

  describe('receivePrepareResponse', () => {
    let highestSeenProposalNumber: number;

    beforeEach(() => {
      highestSeenProposalNumber = 10;
      receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber));
    });

    it('should do nothing', () => {
      const previousProposalNumber = receiver.getHighestSeenProposalNumber();
      const messages = receiver.receiveMessage(<PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: receiver.getId(),
        fromNodeId: senderId,
        previouslyHighestSeenProposalNumber: previousProposalNumber + 1,
        previouslyAcceptedValue: 'apple',
      });
      assert.lengthOf(messages, 0);
      assert.equal(previousProposalNumber, receiver.getHighestSeenProposalNumber());
    });
  });

  describe('receiveAcceptRequest', () => {
    let highestSeenProposalNumber: number;

    const createAcceptRequest = (proposalNumber: number, proposedValue: string) => {
      return <AcceptStageRequest>{
        kind: 'AcceptStageRequest',
        toNodeId: receiver.getId(),
        fromNodeId: senderId,
        proposalNumber: proposalNumber,
        proposedValue: proposedValue,
      };
    };

    beforeEach(() => {
      highestSeenProposalNumber = 123;
      receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber));
    });

    describe('when the proposal number is less than its own', () => {
      it('should reject the request', () => {
        const responses = receiver.receiveMessage(
          createAcceptRequest(highestSeenProposalNumber - 1, 'proposed value')
        );
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.highestSeenProposalNumber, highestSeenProposalNumber);
        assert.notEqual(response.acceptedValue, 'proposed value');
      });
    });

    describe('when the proposal number is greater than its own', () => {
      it('should accept the request', () => {
        const responses = receiver.receiveMessage(
          createAcceptRequest(highestSeenProposalNumber + 1, 'proposed value')
        );
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.highestSeenProposalNumber, highestSeenProposalNumber + 1);
        assert.equal(response.acceptedValue, 'proposed value');
      });
    });
    describe('when the proposal number is equal to its own', () => {
      it('should accept the request', () => {
        const responses = receiver.receiveMessage(
          createAcceptRequest(highestSeenProposalNumber, 'proposed value')
        );
        assert.lengthOf(responses, 1);
        const response = <AcceptStageResponse>responses[0];
        assert.equal(response.highestSeenProposalNumber, highestSeenProposalNumber);
        assert.equal(response.acceptedValue, 'proposed value');
      });
    });
  });

  describe('receiveAcceptResponse', () => {
    let highestSeenProposalNumber: number;

    beforeEach(() => {
      highestSeenProposalNumber = 10;
      receiver.receiveMessage(createPrepareRequest(highestSeenProposalNumber));
    });

    it('should do nothing', () => {
      const previousProposalNumber = receiver.getHighestSeenProposalNumber();
      const messages = receiver.receiveMessage(<AcceptStageResponse>{
        kind: 'AcceptStageResponse',
        toNodeId: receiver.getId(),
        fromNodeId: senderId,
        highestSeenProposalNumber: previousProposalNumber,
        acceptedValue: 'apple',
      });
      assert.lengthOf(messages, 0);
      assert.equal(previousProposalNumber, receiver.getHighestSeenProposalNumber());
    });
  });
});
