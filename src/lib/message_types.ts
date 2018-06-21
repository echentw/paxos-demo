interface MessageBase {
  kind: string;
  headers: {
    toNodeId: number;
    fromNodeId: number;
    proposalNumber: number;
  };
  body: Object;
}

export interface PrepareRequest extends MessageBase {
  kind: 'PrepareRequest';
  body: {};
}

export interface PrepareResponse extends MessageBase {
  kind: 'PrepareResponse';
  body: {
    highestSeenProposalNumber: number;
    acceptedValue: string | null;
  };
}

export interface AcceptRequest extends MessageBase {
  kind: 'AcceptRequest';
  body: {
    proposedValue: string;
  };
}

export interface AcceptResponse extends MessageBase {
  kind: 'AcceptResponse';
  body: {
    accepted: boolean;
    highestSeenProposalNumber: number;
    acceptedValue: string | null;
  };
}

export type Message = PrepareRequest | PrepareResponse | AcceptRequest | AcceptResponse;
