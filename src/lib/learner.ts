import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  Message,
} from './message_types';

import PaxosRole from './paxos_role';

export default class Learner extends PaxosRole {
  private id: number;
  private receiverNodeIds: Array<number>;

  private proposalNumber: number;
  private responses: Array<AcceptStageResponse>;
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

  protected receivePrepareRequest(message: PrepareStageRequest): Array<Message> {
    return [];
  }

  protected receivePrepareResponse(message: PrepareStageResponse): Array<Message> {
    return [];
  }

  protected receiveAcceptRequest(message: AcceptStageRequest): Array<Message> {
    return [];
  }

  protected receiveAcceptResponse(message: AcceptStageResponse): Array<Message> {
    if (message.proposalNumber < this.proposalNumber) {
      return [];
    }

    if (message.proposalNumber > this.proposalNumber) {
      this.proposalNumber = message.proposalNumber;
      this.responses = [];
      this.learnedValue = null
    }

    this.responses.push(message);
    if (this.responses.length > this.receiverNodeIds.length / 2) {
      this.learnedValue = this.responses[0].acceptedValue;
    }

    return [];
  }

  getId = () => this.id;
  getNumResponses = () => this.responses.length;
  getLearnedValue = () => this.learnedValue;
}
