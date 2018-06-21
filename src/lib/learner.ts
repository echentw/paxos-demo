import {
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
  Message,
} from './message_types';

import PaxosRole from './paxos_role';

export default class Learner extends PaxosRole {
  private id: number;
  private receiverNodeIds: Array<number>;

  private proposalNumber: number;
  private responses: Array<AcceptResponse>;
  private learnedValue: string | null;

  constructor(id: number) {
    super();
    this.id = id;
    this.proposalNumber = -1;
    this.responses = [];
  }

  initializeReceiverNodeIds(receiverNodeIds: Array<number>): void {
    this.receiverNodeIds = receiverNodeIds;
  }

  protected receivePrepareRequest(message: PrepareRequest): Array<Message> {
    return [];
  }

  protected receivePrepareResponse(message: PrepareResponse): Array<Message> {
    return [];
  }

  protected receiveAcceptRequest(message: AcceptRequest): Array<Message> {
    return [];
  }

  // TODO: rethink how to implement this method
  protected receiveAcceptResponse(message: AcceptResponse): Array<Message> {
    const { headers, body } = message;

    if (headers.proposalNumber < this.proposalNumber) {
      return [];
    }

    if (headers.proposalNumber > this.proposalNumber) {
      this.proposalNumber = headers.proposalNumber;
      this.responses = [];
      this.learnedValue = null
    }

    this.responses.push(message);
    if (this.responses.length > this.receiverNodeIds.length / 2) {
      this.learnedValue = this.responses[0].body.acceptedValue;
    }

    return [];
  }

  getId = () => this.id;
  getNumResponses = () => this.responses.length;
  getLearnedValue = () => this.learnedValue;
}
