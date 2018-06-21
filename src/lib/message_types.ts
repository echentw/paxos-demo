interface MessageBase {
  kind: string;
  toNodeId: number;
  fromNodeId: number;
  proposalNumber: number;
}

export interface PrepareStageRequest extends MessageBase {
  kind: 'PrepareStageRequest';
}

export interface PrepareStageResponse extends MessageBase {
  kind: 'PrepareStageResponse';
  highestSeenProposalNumber: number;
  acceptedValue: string | null;
}

export interface AcceptStageRequest extends MessageBase {
  kind: 'AcceptStageRequest';
  proposedValue: string;
}

export interface AcceptStageResponse extends MessageBase {
  kind: 'AcceptStageResponse';
  accepted: boolean;
  highestSeenProposalNumber: number;
  acceptedValue: string | null;
}

export type Message =
  | PrepareStageRequest
  | PrepareStageResponse
  | AcceptStageRequest
  | AcceptStageResponse;
