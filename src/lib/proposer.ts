import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  Message,
} from './message_types';

import PaxosRole from './paxos_role';

export default class Proposer extends PaxosRole {
  private id: number;
  private receiverNodeIds: Array<number>;

  private proposalNumber: number;
  private proposedValue: string;
  private responses: Array<PrepareStageResponse>;
  private isProposing: boolean;

  constructor(id: number) {
    super();
    this.id = id;
    this.reset();
  }

  initializeReceiverNodeIds(receiverNodeIds: Array<number>): void {
    this.receiverNodeIds = receiverNodeIds;
  }

  generatePrepareRequests(value: string, proposalNumberToBeat: number): Array<PrepareStageRequest> {
    this.proposalNumber = this.getNewProposalNumber(proposalNumberToBeat);
    this.proposedValue = value;
    this.responses = [];
    this.isProposing = true;

    return this.receiverNodeIds
      .map((nodeId: number): PrepareStageRequest =>
        <PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          toNodeId: nodeId,
          fromNodeId: this.id,
          proposalNumber: this.proposalNumber,
        }
      );
  }

  private reset(): void {
    this.proposalNumber = -1;
    this.proposedValue = '';
    this.responses = [];
    this.isProposing = false;
  }

  private getNewProposalNumber(proposalNumberToBeat: number): number {
    if (!proposalNumberToBeat) {
      proposalNumberToBeat = 0;
    }
    const numNodes = this.receiverNodeIds.length;
    return (Math.floor(proposalNumberToBeat / numNodes) + 1) * numNodes + this.id;
  }

  protected receivePrepareRequest(message: PrepareStageRequest): Array<Message> {
    if (message.proposalNumber > this.proposalNumber) {
      this.reset();
    }
    return [];
  };

  protected receivePrepareResponse(message: PrepareStageResponse): Array<Message> {
    if (!this.isProposing) {
      return [];
    }
    if (message.previouslyHighestSeenProposalNumber > this.proposalNumber) {
      this.reset();
      return [];
    }

    this.responses.push(message);

    // If the majority of receiver nodes haven't acknowledged the prepare request yet, then do nothing.
    if (this.responses.length <= this.receiverNodeIds.length / 2) {
      return [];
    }

    // Majority of receiver nodes have acknowledged the prepare request!
    const messageWithHighestProposalNumber = this.responses
      .reduce((prevMessage, nextMessage) =>
        prevMessage.previouslyHighestSeenProposalNumber > nextMessage.previouslyHighestSeenProposalNumber
        ? prevMessage : nextMessage
      );
    const { previouslyHighestSeenProposalNumber, previouslyAcceptedValue } = messageWithHighestProposalNumber;
    if (previouslyAcceptedValue !== null) {
      this.proposedValue = previouslyAcceptedValue;
    }
    return this.generateAcceptRequests();
  }

  private generateAcceptRequests(): Array<Message> {
    return this.receiverNodeIds
      .filter((nodeId: number) => nodeId !== this.id)
      .map((nodeId: number): AcceptStageRequest =>
        <AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          toNodeId: nodeId,
          fromNodeId: this.id,
          proposalNumber: this.proposalNumber,
          proposedValue: this.proposedValue,
        }
      )
  }

  protected receiveAcceptRequest(message: AcceptStageRequest): Array<Message> {
    if (message.proposalNumber > this.proposalNumber) {
      this.reset();
    }
    return [];
  }

  protected receiveAcceptResponse(message: AcceptStageResponse): Array<Message> {
    return [];
  }

  getId = () => this.id;
  getIsProposing = () => this.isProposing;
  getProposedValue = () => this.proposedValue;
  getNumResponses = () => this.responses.length;
}
