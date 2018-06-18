interface MessageBase {
  kind: string;
  toNodeId: number;
  fromNodeId: number;
}

export interface PrepareStageRequest extends MessageBase {
  kind: 'PrepareStageRequest';
  proposalNumber: number;
}

export interface PrepareStageResponse extends MessageBase {
  kind: 'PrepareStageResponse',
  previouslyHighestSeenProposalNumber: number;
  previouslyAcceptedValue: string | null;
}

export interface AcceptStageRequest extends MessageBase {
  kind: 'AcceptStageRequest';
  proposalNumber: number;
  proposedValue: string;
}

export interface AcceptStageResponse extends MessageBase {
  kind: 'AcceptStageResponse';
  highestSeenProposalNumber: number;
  acceptedValue: string;
}

export type Message =
  | PrepareStageRequest
  | PrepareStageResponse
  | AcceptStageRequest
  | AcceptStageResponse;
