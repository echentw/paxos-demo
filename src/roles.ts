import { PrepareStageResponse } from './message';

export class Proposer {
  private id: number;
  private numNodes: number;

  public proposalNumber: number;
  public proposedValue: string;
  public responses: Array<PrepareStageResponse>;
  public isProposing: boolean;

  constructor(id: number, numNodes: number) {
    this.id = id;
    this.numNodes = numNodes;
  }

  reset(): void {
    this.proposalNumber = 0;
    this.proposedValue = '';
    this.responses = [];
    this.isProposing = false;
  }

  getNewProposalNumber(highestSeenProposalNumber: number): number {
    return (Math.floor(highestSeenProposalNumber / this.numNodes) + 1) * this.numNodes + this.id;
  }
}

export class Receiver {
  public highestSeenProposalNumber: number;
  public acceptedValue: string | null;

  constructor() {
  }
}
