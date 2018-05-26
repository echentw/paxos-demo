import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  ChosenValueResponse,
  Message,
} from './message';

import { Proposer, Receiver, Learner } from './roles';


export class PaxosNode {
  private proposer: Proposer;
  private receiver: Receiver;
  private learner: Learner;

  private nodeList: Array<PaxosNode>;

  constructor(id: number, numNodes: number) {
    this.proposer = new Proposer(id, numNodes);
    this.receiver = new Receiver();
    this.learner = new Learner();

    this.nodeList = [this];
  }

  initializeNodeList(nodeList: Array<PaxosNode>): void {
    this.nodeList = nodeList;
  }

  receiveMessage(message: Message): Array<Message> {
    switch(message.kind) {
      case 'PrepareStageRequest': {
        return this.receivePrepareRequest(message);
      }
      case 'PrepareStageResponse': {
        return this.receivePrepareResponse(message);
      }
      case 'AcceptStageRequest': {
        return this.receiveAcceptRequest(message);
      }
      case 'AcceptStageResponse': {
        return this.receiveAcceptResponse(message);
      }
    }
  }

  // Phase 1 proposer
  sendPrepareRequest(value: string): Array<Message> {
    this.proposer.proposalNumber = this.proposer.getNewProposalNumber(this.receiver.highestSeenProposalNumber);
    this.proposer.proposedValue = value;
    this.proposer.responses = [];
    this.proposer.isProposing = true;

    this.proposer.responses.push({
      kind: 'PrepareStageResponse',
      toNode: this,
      fromNode: this,
      proposalNumber: this.receiver.highestSeenProposalNumber,
      value: this.receiver.acceptedValue,
    });

    this.receiver.highestSeenProposalNumber = this.proposer.proposalNumber;

    return this.nodeList
      .filter((node: PaxosNode): boolean => node !== this)
      .map((node: PaxosNode): PrepareStageRequest =>
        <PrepareStageRequest>{
          kind: 'PrepareStageRequest',
          toNode: node,
          fromNode: this,
          proposalNumber: this.proposer.proposalNumber,
        }
      );
  }

  // Phase 1 proposer
  receivePrepareResponse(message: PrepareStageResponse): Array<Message> {
    if (!this.proposer.isProposing) {
      return [];
    }

    this.proposer.responses.push(message);

    if (this.proposer.responses.length > this.nodeList.length / 2) {
      const importantMessage = this.proposer.responses.reduce((prevMessage, nextMessage) => {
        return prevMessage.proposalNumber > nextMessage.proposalNumber ? prevMessage : nextMessage;
      });
      const { proposalNumber, value } = importantMessage;

      if (proposalNumber > this.proposer.proposalNumber) {
        this.proposer.isProposing = false;
        return [];
      }

      if (value !== null) {
        this.proposer.proposedValue = value;
      }

      return this.sendAcceptRequest();
    }

    return [];
  }

  // Phase 2 proposer
  sendAcceptRequest(): Array<Message> {
    this.learner.acceptedCount = 1;
    return this.nodeList
      .filter((node: PaxosNode): boolean => node !== this)
      .map((node: PaxosNode): AcceptStageRequest =>
        <AcceptStageRequest>{
          kind: 'AcceptStageRequest',
          toNode: node,
          fromNode: this,
          proposalNumber: this.proposer.proposalNumber,
          value: this.proposer.proposedValue,
        }
      )
  }

  // Phase 1 receiver
  receivePrepareRequest(message: PrepareStageRequest): Array<Message> {
    const highestSeenProposalNumber = this.receiver.highestSeenProposalNumber;
    const acceptedValue = this.receiver.acceptedValue;

    if (!this.receiver.highestSeenProposalNumber ||
        message.proposalNumber > this.receiver.highestSeenProposalNumber) {
      this.receiver.highestSeenProposalNumber = message.proposalNumber;
      this.receiver.acceptedValue = null;
    }

    return [
      <PrepareStageResponse>{
        kind: 'PrepareStageResponse',
        toNode: message.fromNode,
        fromNode: this,
        proposalNumber: highestSeenProposalNumber,
        value: acceptedValue,
      }
    ];
  }

  // Phase 2 receiver
  receiveAcceptRequest(message: AcceptStageRequest): Array<Message> {
    if (message.proposalNumber >= this.receiver.highestSeenProposalNumber) {
      this.receiver.highestSeenProposalNumber = message.proposalNumber;
      this.receiver.acceptedValue = message.value;
    }
    return [
      <AcceptStageResponse>{
        kind: 'AcceptStageResponse',
        proposalNumber: this.receiver.highestSeenProposalNumber,
      }
    ];
  }

  // Phase 2 learner
  receiveAcceptResponse(message: AcceptStageResponse): Array<Message> {
    if (!this.proposer.isProposing) {
      return [];
    }

    if (message.proposalNumber === this.proposer.proposalNumber) {
      this.learner.acceptedCount += 1;
    }

    if (this.learner.acceptedCount > this.nodeList.length / 2) {
      return [
        <ChosenValueResponse>{
          kind: 'ChosenValueResponse',
          value: this.proposer.proposedValue,
        }
      ];
    }

    return [];
  }
}
