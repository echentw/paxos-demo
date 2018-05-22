interface MessageBase {
  kind: string;
  toNode: PaxosNode;
  fromNode: PaxosNode;
}

interface PrepareStageRequest extends MessageBase {
  kind: 'PrepareStageRequest';
  proposalNumber: number;
}

interface PrepareStageResponse extends MessageBase {
  kind: 'PrepareStageResponse',
  accepted: boolean;
  highestProposalNumber: number;
  value: string | null;
}

interface AcceptStageRequest extends MessageBase {
  kind: 'AcceptStageRequest',
  proposalNumber: number;
  value: string;
}

type Message = PrepareStageRequest | PrepareStageResponse | AcceptStageRequest;


class PaxosNode {
  private proposalNumber: number;
  private value: string;
  private nodeList: Array<PaxosNode>;

  private getNewProposalNumber: (proposalNumber: number) => number;

  // Phase 1
  private numNodesAcceptedProposal: number;

  constructor(id: number, numNodes: number) {
    this.proposalNumber = 0;
    this.nodeList = [this];

    this.getNewProposalNumber = (proposalNumber: number) => {
      return (Math.floor(proposalNumber / numNodes) + 1) * numNodes + id;
    };
  }

  initiateProposal(value: string) {
    this.numNodesAcceptedProposal = 1;
    this.value = value;
    this.proposalNumber = this.getNewProposalNumber(this.proposalNumber);
    this.nodeList.forEach((node: PaxosNode) => {
      const message: PrepareStageRequest = {
        kind: 'PrepareStageRequest',
        toNode: node,
        fromNode: this,
        proposalNumber: this.proposalNumber,
      };
      // TODO: send message to node
    });
  }

  receiveMessage(message: Message): void {
    if (message.kind === 'PrepareStageRequest') {
      if (this.proposalNumber > message.proposalNumber) {
        const response: PrepareStageResponse = {
          kind: 'PrepareStageResponse',
          toNode: message.fromNode,
          fromNode: this,
          accepted: false,
          highestProposalNumber: this.proposalNumber,
          value: this.value,
        };
        // TODO: send message back to node
      } else if (this.proposalNumber < message.proposalNumber) {
        this.proposalNumber = message.proposalNumber;
        const response: PrepareStageResponse = {
          kind: 'PrepareStageResponse',
          toNode: message.fromNode,
          fromNode: this,
          accepted: false,
          highestProposalNumber: message.proposalNumber,
          value: null,
        };
        // TODO: send message back to node
      } else {
        throw new Error('Received a PrepareStageRequest with an already seen proposal number.');
      }
    } else if (message.kind === 'PrepareStageResponse') {
      if (message.accepted) {
        this.numNodesAcceptedProposal += 1;
      } else {
        this.value = message.value;
        this.proposalNumber = message.highestProposalNumber;
      }
    } else if (message.kind === 'AcceptStageRequest') {
      if (this.proposalNumber <= message.proposalNumber) {
        this.proposalNumber = message.proposalNumber;
        this.value = message.value;
      } else {
        // TODO: Can we ignore here?
      }
    } else {
      throw new Error('Message received is not a message.');
    }
  }

  setNodeList(nodeList) {
    this.nodeList = nodeList;
  }
}

const message: PrepareStageRequest = {
  kind: 'PrepareStageRequest',
  toNode: new PaxosNode(0, 5),
  fromNode: new PaxosNode(1, 5),
  proposalNumber: 12,
}

console.log(typeof message);
