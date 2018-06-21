import {
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
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

  protected receivePrepareRequest(message: PrepareRequest): Array<Message> {
    const { headers } = message;

    const highestSeenProposalNumber = this.highestSeenProposalNumber;
    const acceptedValue = this.acceptedValue;

    if (headers.proposalNumber > this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = headers.proposalNumber;
      this.acceptedValue = null;
    }

    return [
      <PrepareResponse>{
        kind: 'PrepareResponse',
        headers: {
          toNodeId: headers.fromNodeId,
          fromNodeId: this.id,
          proposalNumber: headers.proposalNumber,
        },
        body: {
          highestSeenProposalNumber: highestSeenProposalNumber,
          acceptedValue: acceptedValue,
        },
      }
    ];
  };

  protected receivePrepareResponse(message: PrepareResponse): Array<Message> {
    return [];
  }

  protected receiveAcceptRequest(message: AcceptRequest): Array<Message> {
    const { headers, body } = message;

    let accepted = false;
    if (headers.proposalNumber >= this.highestSeenProposalNumber) {
      this.highestSeenProposalNumber = headers.proposalNumber;
      this.acceptedValue = body.proposedValue;
      accepted = true;
    }
    return [
      <AcceptResponse>{
        kind: 'AcceptResponse',
        headers: {
          toNodeId: headers.fromNodeId,
          fromNodeId: this.id,
          proposalNumber: headers.proposalNumber,
        },
        body: {
          accepted: accepted,
          highestSeenProposalNumber: this.highestSeenProposalNumber,
          acceptedValue: accepted ? this.acceptedValue : null,
        },
      }
    ];
  }

  protected receiveAcceptResponse(message: AcceptResponse): Array<Message> {
    return [];
  }

  getId = () => this.id;
  getAcceptedValue = () => this.acceptedValue;
  getHighestSeenProposalNumber = () => this.highestSeenProposalNumber;
}
