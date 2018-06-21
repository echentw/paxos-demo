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
    const highestSeenProposalNumber = this.highestSeenProposalNumber;
    const acceptedValue = this.acceptedValue;
    if (message.proposalNumber > this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = message.proposalNumber;
      this.acceptedValue = null;
    }
    return [
      <PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNodeId: message.fromNodeId,
        fromNodeId: this.id,
        proposalNumber: message.proposalNumber,
        highestSeenProposalNumber: highestSeenProposalNumber,
        acceptedValue: acceptedValue,
      }
    ];
  };

  protected receivePrepareResponse(message: PrepareStageResponse): Array<Message> {
    return [];
  }

  protected receiveAcceptRequest(message: AcceptStageRequest): Array<Message> {
    let accepted = false;
    if (message.proposalNumber >= this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = message.proposalNumber;
      this.acceptedValue = message.proposedValue;
      accepted = true;
    }
    return [
      <AcceptStageResponse>{
        kind: 'AcceptStageResponse',
        toNodeId: message.fromNodeId,
        fromNodeId: this.id,
        proposalNumber: message.proposalNumber,
        accepted: accepted,
        highestSeenProposalNumber: this.highestSeenProposalNumber,
        acceptedValue: accepted ? this.acceptedValue : null,
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
