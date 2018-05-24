import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  Message,
} from './message';

import { MessagePool } from './message_pool';

import { Proposer, Receiver, Learner } from './roles';


export class PaxosNode {
  private proposer: Proposer;
  private receiver: Receiver;
  private learner: Learner;

  private messagePool: MessagePool;

  private nodeList: Array<PaxosNode>;

  constructor(messagePool: MessagePool, id: number, numNodes: number) {
    this.proposer = new Proposer(id, numNodes);
    this.receiver = new Receiver();
    this.learner = new Learner();

    this.messagePool = messagePool;
    this.nodeList = [this];
  }

  initializeNodeList(nodeList: Array<PaxosNode>): void {
    this.nodeList = nodeList;
  }

  receiveMessage(message: Message): void {
    switch(message.kind) {
      case 'PrepareStageRequest': {
        this.receivePrepareRequest(message);
        break;
      }
      case 'PrepareStageResponse': {
        this.receivePrepareResponse(message);
        break;
      }
      case 'AcceptStageRequest': {
        this.receiveAcceptRequest(message);
        break;
      }
      case 'AcceptStageResponse': {
        this.receiveAcceptResponse(message);
        break;
      }
    }
  }

  // Phase 1 proposer
  sendPrepareRequest(value: string): void {
    this.proposer.proposalNumber = this.proposer.getNewProposalNumber(this.receiver.highestSeenProposalNumber);
    this.proposer.proposedValue = value;
    this.proposer.responses = [];
    this.proposer.isProposing = true;

    this.learner.countsByChosenValue = new Map<string, number>();

    this.proposer.responses.push({
      kind: 'PrepareStageResponse',
      toNode: this,
      fromNode: this,
      proposalNumber: this.receiver.highestSeenProposalNumber,
      value: this.receiver.acceptedValue,
    });

    this.receiver.highestSeenProposalNumber = this.proposer.proposalNumber;

    this.nodeList.forEach((node: PaxosNode): void => {
      if (node !== this) {
        const message: PrepareStageRequest = {
          kind: 'PrepareStageRequest',
          toNode: node,
          fromNode: this,
          proposalNumber: this.proposer.proposalNumber,
        };
        this.messagePool.addMessage(message);
      }
    });
  }

  // Phase 1 proposer
  receivePrepareResponse(message: PrepareStageResponse): void {
    if (!this.proposer.isProposing) {
      return;
    }

    this.proposer.responses.push(message);

    if (this.proposer.responses.length > this.nodeList.length / 2) {
      const importantMessage = this.proposer.responses.reduce((prevMessage, nextMessage) => {
        return prevMessage.proposalNumber > nextMessage.proposalNumber ? prevMessage : nextMessage;
      });
      const { proposalNumber, value } = importantMessage;

      if (proposalNumber > this.proposer.proposalNumber) {
        this.proposer.isProposing = false;
      } else {
        if (value !== null) {
          this.proposer.proposedValue = value;
        }
        this.sendAcceptRequest();
      }
    }
  }

  // Phase 2 proposer
  sendAcceptRequest(): void {
    this.nodeList.forEach((node: PaxosNode): void => {
      const message: AcceptStageRequest = {
        kind: 'AcceptStageRequest',
        toNode: node,
        fromNode: this,
        proposalNumber: this.proposer.proposalNumber,
        value: this.proposer.proposedValue,
      };
      this.messagePool.addMessage(message);
    });
  }

  // Phase 1 receiver
  receivePrepareRequest(message: PrepareStageRequest): void {
    const response: PrepareStageResponse = {
      kind: 'PrepareStageResponse',
      toNode: message.fromNode,
      fromNode: this,
      proposalNumber: this.receiver.highestSeenProposalNumber,
      value: this.receiver.acceptedValue,
    };
    this.messagePool.addMessage(response);

    if (message.proposalNumber > this.receiver.highestSeenProposalNumber) {
      this.receiver.highestSeenProposalNumber = message.proposalNumber;
      this.receiver.acceptedValue = null;
    }
  }

  // Phase 2 receiver
  receiveAcceptRequest(message: AcceptStageRequest): void {
    if (message.proposalNumber >= this.receiver.highestSeenProposalNumber) {
      this.receiver.highestSeenProposalNumber = message.proposalNumber;
      this.receiver.acceptedValue = message.value;
    }
  }

  // Phase 2 learner
  receiveAcceptResponse(message: AcceptStageResponse): void {
    // TODO: implement me!
  }
}
