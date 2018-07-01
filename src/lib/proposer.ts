import {
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
  Message,
} from './message_types';

import PaxosRole from './paxos_role';

export default class Proposer extends PaxosRole {
  private id: number;
  private receiverNodeIds: Array<number>;

  private proposalNumber: number;
  private proposedValue: string;
  private responses: Array<PrepareResponse>;
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

  generatePrepareRequests(value: string, proposalNumberToBeat: number): Array<PrepareRequest> {
    this.reset();
    this.proposalNumber = this.getNewProposalNumber(proposalNumberToBeat);
    this.proposedValue = value;
    this.isProposing = true;

    return this.receiverNodeIds
      .map((nodeId: number): PrepareRequest =>
        <PrepareRequest>{
          kind: 'PrepareRequest',
          headers: {
            toNodeId: nodeId,
            fromNodeId: this.id,
            proposalNumber: this.proposalNumber,
          },
          body: {},
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

  protected receivePrepareRequest(message: PrepareRequest): Array<Message> {
    if (message.headers.proposalNumber > this.proposalNumber) {
      this.reset();
    }
    return [];
  };

  protected receivePrepareResponse(message: PrepareResponse): Array<Message> {
    const { headers, body } = message;

    if (!this.isProposing ||
        this.initiatedAcceptPhase ||
        headers.proposalNumber !== this.proposalNumber) {
      return [];
    }
    if (body.highestSeenProposalNumber > this.proposalNumber) {
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
        prevMessage.body.highestSeenProposalNumber > nextMessage.body.highestSeenProposalNumber
        ? prevMessage : nextMessage
      );
    const { highestSeenProposalNumber, acceptedValue } = messageWithHighestProposalNumber.body;
    if (acceptedValue != null) {
      this.proposedValue = acceptedValue;
    }
    return this.generateAcceptRequests();
  }

  private generateAcceptRequests(): Array<Message> {
    return this.receiverNodeIds.map((nodeId: number): AcceptRequest =>
      <AcceptRequest>{
        kind: 'AcceptRequest',
        headers: {
          toNodeId: nodeId,
          fromNodeId: this.id,
          proposalNumber: this.proposalNumber,
        },
        body: {
          proposedValue: this.proposedValue,
        },
      }
    );
  }

  protected receiveAcceptRequest(message: AcceptRequest): Array<Message> {
    if (message.headers.proposalNumber > this.proposalNumber) {
      this.reset();
    }
    return [];
  }

  protected receiveAcceptResponse(message: AcceptResponse): Array<Message> {
    if (message.body.highestSeenProposalNumber > this.proposalNumber) {
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
