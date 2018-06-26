import { Message } from './lib/message_types';

export interface MessageState {
  id: string;
  message: Message;
}

export interface ProposerState {
  isProposing: boolean;
  proposalNumber: number;
  proposedValue: string;
  responses: number;
  phase: string;
}

export interface ReceiverState {
  highestSeenProposalNumber: number;
  acceptedValue: string | null;
}

export interface LearnerState {
  responses: number;
  learnedValue: string | null;
}

export interface NodeState {
  id: number;
  proposer: ProposerState;
  receiver: ReceiverState;
  learner: LearnerState;
  messages: Array<MessageState>;
}
