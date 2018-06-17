import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  Message,
} from './message_types';

import PaxosRole from './paxos_role';

export default class Receiver extends PaxosRole {
  private id: number;

  private highestSeenProposalNumber: number;
  private acceptedValue: string;

  constructor(id: number) {
    super();
    this.id = id;
    this.highestSeenProposalNumber = -1;
    this.acceptedValue = '';
  }

  getHighestSeenProposalNumber(): number {
    return this.highestSeenProposalNumber;
  }

  protected receivePrepareRequest(message: PrepareStageRequest): Array<Message> {
    if (message.proposalNumber > this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = message.proposalNumber;
      this.acceptedValue = '';
    }
    return [
      <PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: message.fromNodeId,
        fromNodeId: this.id,
        highestSeenProposalNumber: this.highestSeenProposalNumber,
        previouslyAcceptedValue: this.acceptedValue,
      }
    ];
  };

  protected receivePrepareResponse(message: PrepareStageResponse): Array<Message> {
    return [];
  }

  protected receiveAcceptRequest(message: AcceptStageRequest): Array<Message> {
    if (message.proposalNumber >= this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = message.proposalNumber;
      this.acceptedValue = message.proposedValue;
    }
    return [
      <AcceptStageResponse>{
        kind: 'AcceptStageResponse',
        toNodeId: message.fromNodeId,
        fromNodeId: this.id,
        highestSeenProposalNumber: this.highestSeenProposalNumber,
        acceptedValue: this.acceptedValue,
      }
    ];
  }

  protected receiveAcceptResponse(message: AcceptStageResponse): Array<Message> {
    return [];
  }

  getAcceptedValue = () => this.acceptedValue;
}
