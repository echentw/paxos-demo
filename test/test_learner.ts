import { assert, expect, should } from 'chai';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
} from '../src/lib/message_types';

import Learner from '../src/lib/learner';


describe('Learner', () => {
  let learner: Learner;
  let receiverIds: Array<number>;
  let senderId: number;

  const createAcceptResponse = (highestSeenProposalNumber: number, acceptedValue: string) => {
    return <AcceptStageResponse>{
      kind: 'AcceptStageResponse',
      toNodeId: learner.getId(),
      fromNodeId: senderId,
      highestSeenProposalNumber: highestSeenProposalNumber,
      acceptedValue: acceptedValue,
    };
  };

  beforeEach(() => {
    receiverIds = [1, 2, 3, 4, 5];
    learner = new Learner(0);
    learner.initializeReceiverNodeIds(receiverIds);
    senderId = receiverIds[0];
  });

  describe('receiveAcceptResponse', () => {
    let previousProposalNumber: number;
    let previousLearnedValue: string;

    let proposalNumber: number;
    let proposedValue: string;

    beforeEach(() => {
      previousProposalNumber = 122;
      previousLearnedValue = 'kitty';

      proposalNumber = 123;
      proposedValue = 'doggy';

      learner.receiveMessage(createAcceptResponse(previousProposalNumber, previousLearnedValue));
      learner.receiveMessage(createAcceptResponse(previousProposalNumber, previousLearnedValue));
      learner.receiveMessage(createAcceptResponse(previousProposalNumber, previousLearnedValue));
    });

    describe('when receiving a lower proposal number than the current one', () => {
      it('should change nothing', () => {
        learner.receiveMessage(createAcceptResponse(previousProposalNumber - 1, previousLearnedValue));
        assert.equal(learner.getLearnedValue(), previousLearnedValue);
      });
    });

    describe('when receiving the same proposal number as the current one', () => {
      describe('when there is no quorum', () => {
        it('should not update the learned value', () => {
          learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
          learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
          assert.isNull(learner.getLearnedValue());
        });
      });
      describe('when there is quorum', () => {
        it('should update the learned value', () => {
          learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
          learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
          learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
          assert.equal(learner.getLearnedValue(), proposedValue);
        });
      });
    });

    describe('when receiving a higher proposal number than the current one', () => {
      it('should reset its responses', () => {
        learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
        assert.isNull(learner.getLearnedValue());

        learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
        learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
        assert.equal(learner.getLearnedValue(), proposedValue);
      });

      it('should null its learned value', () => {
        learner.receiveMessage(createAcceptResponse(proposalNumber, proposedValue));
        assert.isNull(learner.getLearnedValue());
      });
    });
  });
});
