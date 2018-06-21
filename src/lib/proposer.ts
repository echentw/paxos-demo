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

  private initiatedAcceptPhase: boolean;

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
    this.initiatedAcceptPhase = false;
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
    if (!this.isProposing ||
        this.initiatedAcceptPhase ||
        message.proposalNumber !== this.proposalNumber) {
      return [];
    }
    if (message.highestSeenProposalNumber > this.proposalNumber) {
      this.reset();
      return [];
    }

    this.responses.push(message);

    // If the majority of receiver nodes haven't acknowledged the prepare request yet, then do nothing.
    if (this.responses.length <= this.receiverNodeIds.length / 2) {
      return [];
    }

    // Majority of receiver nodes have acknowledged the prepare request!
    this.initiatedAcceptPhase = true;

    const messageWithHighestProposalNumber = this.responses
      .reduce((prevMessage, nextMessage) =>
        prevMessage.highestSeenProposalNumber > nextMessage.highestSeenProposalNumber
        ? prevMessage : nextMessage
      );
    const { highestSeenProposalNumber, acceptedValue } = messageWithHighestProposalNumber;
    if (acceptedValue != null) {
      this.proposedValue = acceptedValue;
    }
    return this.generateAcceptRequests();
  }

  private generateAcceptRequests(): Array<Message> {
    return this.receiverNodeIds.map((nodeId: number): AcceptStageRequest =>
      <AcceptStageRequest>{
        kind: 'AcceptStageRequest',
        toNodeId: nodeId,
        fromNodeId: this.id,
        proposalNumber: this.proposalNumber,
        proposedValue: this.proposedValue,
      }
    );
  }

  protected receiveAcceptRequest(message: AcceptStageRequest): Array<Message> {
    if (message.proposalNumber > this.proposalNumber) {
      this.reset();
    }
    return [];
  }

  protected receiveAcceptResponse(message: AcceptStageResponse): Array<Message> {
    if (message.highestSeenProposalNumber > this.proposalNumber) {
      this.reset();
    }
    return [];
  }

  getId = () => this.id;
  getIsProposing = () => this.isProposing;
  getProposalNumber = () => this.proposalNumber;
  getProposedValue = () => this.proposedValue;
  getNumResponses = () => this.responses.length;
  getPhase = () => {
    if (!this.isProposing) {
      return 'N/A';
    } else if (!this.initiatedAcceptPhase) {
      return 'Prepare';
    } else {
      return 'Accept';
    }
  };
}
