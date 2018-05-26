import { PaxosNode } from './paxos_node';

interface MessageBase {
  kind: string;
  toNode: PaxosNode;
  fromNode: PaxosNode;
}

export interface PrepareStageRequest extends MessageBase {
  kind: 'PrepareStageRequest';
  proposalNumber: number;
}

export interface PrepareStageResponse extends MessageBase {
  kind: 'PrepareStageResponse',
  proposalNumber: number;
  value: string | null;
}

export interface AcceptStageRequest extends MessageBase {
  kind: 'AcceptStageRequest';
  proposalNumber: number;
  value: string;
}

export interface AcceptStageResponse extends MessageBase {
  kind: 'AcceptStageResponse';
  proposalNumber: number;
}

export interface ChosenValueResponse extends MessageBase {
  kind: 'ChosenValueResponse';
  value: string;
}

export type Message =
  | PrepareStageRequest
  | PrepareStageResponse
  | AcceptStageRequest
  | AcceptStageResponse
  | ChosenValueResponse;
