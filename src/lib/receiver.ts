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
  private acceptedValue: string | null;

  constructor(id: number) {
    super();
    this.id = id;
    this.highestSeenProposalNumber = -1;
    this.acceptedValue = null;
  }

  protected receivePrepareRequest(message: PrepareStageRequest): Array<Message> {
    const previouslyHighestSeenProposalNumber = this.highestSeenProposalNumber;
    const previouslyAcceptedValue = this.acceptedValue;
    if (message.proposalNumber > this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = message.proposalNumber;
      this.acceptedValue = null;
    }
    return [
      <PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: message.fromNodeId,
        fromNodeId: this.id,
        previouslyHighestSeenProposalNumber: previouslyHighestSeenProposalNumber,
        previouslyAcceptedValue: previouslyAcceptedValue,
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

  getId = () => this.id;
  getAcceptedValue = () => this.acceptedValue;
  getHighestSeenProposalNumber = () => this.highestSeenProposalNumber;
}
