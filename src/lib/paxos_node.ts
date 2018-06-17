import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  Message,
} from './message_types';

import Proposer from './proposer';
import Receiver from './receiver';
import Learner from './learner';

export default class PaxosNode {
  private id: number;

  private proposer: Proposer;
  private receiver: Receiver;
  private learner: Learner;

  constructor(id: number, numNodes: number) {
    this.id = id;

    this.proposer = new Proposer(id);
    this.receiver = new Receiver(id);
    this.learner = new Learner(id);
  }

  initializeNodeIds(nodeIds: Array<number>): void {
    this.proposer.initializeReceiverNodeIds(nodeIds);
    this.learner.initializeReceiverNodeIds(nodeIds);
  }

  receiveMessage(message: Message): Array<Message> {
    const proposerMessages = this.proposer.receiveMessage(message);
    const receiverMessages = this.receiver.receiveMessage(message);
    const learnerMessages = this.learner.receiveMessage(message);

    if (proposerMessages.length > 0) {
      // The proposer is initiating the accept stage.
      const acceptRequestToSelf = proposerMessages.find((request) => request.toNodeId === this.id);
      const acceptResponseToSelf = this.receiver.receiveMessage(acceptRequestToSelf!)[0];
      this.learner.receiveMessage(acceptResponseToSelf);

      return proposerMessages.filter((message) => message.toNodeId !== this.id);
    }

    if (receiverMessages.length > 0) {
      return receiverMessages;
    }

    if (learnerMessages.length > 0) {
      return learnerMessages;
    }

    return [];
  }

  generatePrepareRequests(valueToPropose: string): Array<Message> {
    const highestSeenProposalNumber = this.receiver.getHighestSeenProposalNumber();
    const prepareRequests = this.proposer.generatePrepareRequests(valueToPropose, highestSeenProposalNumber);

    const prepareRequestToSelf = prepareRequests.find((request) => request.toNodeId === this.id);
    const prepareResponseToSelf = this.receiver.receiveMessage(prepareRequestToSelf!)[0];
    this.proposer.receiveMessage(prepareResponseToSelf);

    return prepareRequests.filter((request: PrepareStageRequest) => request.toNodeId !== this.id)
  }

  // Getter methods
  getId = () => this.id;
  getProposalNumber = () => this.receiver.getHighestSeenProposalNumber();
  isProposing = () => this.proposer.getIsProposing();
  getAcceptedValue = () => this.receiver.getAcceptedValue();
  getProposedValue = () => this.proposer.getProposedValue();
  getNumResponses = () => this.proposer.getNumResponses();
}
