import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Message } from './lib/message_types';
import PaxosNode from './lib/paxos_node';
import MessagePool from './lib/message_pool';
import Paxos from './lib/paxos';

import MessagePoolComponent from './MessagePoolComponent';
import NodeClusterComponent from './NodeClusterComponent';

export interface MessageState {
  id: string;
  message: Message;
}

interface ProposerState {
  isProposing: boolean;
  proposalNumber: number;
  proposedValue: string;
  responses: number;
  phase: string;
}

interface ReceiverState {
  highestSeenProposalNumber: number;
  acceptedValue: string | null;
}

interface LearnerState {
  responses: number;
  learnedValue: string | null;
}

export interface NodeState {
  // Global state
  id: number;

  proposer: ProposerState;
  receiver: ReceiverState;
  learner: LearnerState;
}

function getNodeStates(paxos: Paxos): Array<NodeState> {
  return paxos.nodes.map((node, index) => {
    if (node.getId() !== index) {
      throw Error('Something is terribly wrong!!!');
    }
    return {
      id: node.getId(),

      proposer: {
        isProposing: node.isProposing(),
        proposalNumber: node.getProposalNumber(),
        proposedValue: node.getProposedValue(),
        responses: node.getNumProposerResponses(),
        phase: node.getProposerPhase(),
      },

      receiver: {
        highestSeenProposalNumber: node.getHighestSeenProposalNumber(),
        acceptedValue: node.getAcceptedValue(),
      },

      learner: {
        responses: node.getNumLearnerResponses(),
        learnedValue: node.getLearnedValue(),
      },
    };
  });
}

function getMessageStates(paxos: Paxos): Array<MessageState> {
  return paxos.messagePool.idMessagePairs.map((pair) => {
    const { id, message } = pair;
    return {
      id: id,
      message: message,
    };
  });
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const paxos = new Paxos(5);
    this.state = {
      paxos: paxos,
      nodeStates: getNodeStates(paxos),
      messageStates: getMessageStates(paxos),
    };
  }

  initiatePaxos = (nodeId: number, proposedValue: string): void => {
    const { paxos } = this.state;

    const node = paxos.getNodeById(nodeId);
    const messages = node.generatePrepareRequests(proposedValue);
    messages.forEach((message) => paxos.messagePool.addMessage(message));

    this.setState({
      nodeStates: getNodeStates(paxos),
      messageStates: getMessageStates(paxos),
    });
  }

  deliverMessage = (messageId: String): void => {
    const { paxos } = this.state;

    const message: Message = paxos.messagePool.retrieveMessage(messageId);
    const toNode = paxos.getNodeById(message.headers.toNodeId);
    const responses = toNode.receiveMessage(message);
    responses.forEach((response) => paxos.messagePool.addMessage(response));

    this.setState({
      nodeStates: getNodeStates(paxos),
      messageStates: getMessageStates(paxos),
    });
  }

  render() {
    return (
      <div className="container">
        <NodeClusterComponent
          paxos={this.state.paxos}
          initiatePaxos={this.initiatePaxos}
          nodeStates={this.state.nodeStates}
        />
        <MessagePoolComponent
          paxos={this.state.paxos}
          deliverMessage={this.deliverMessage}
          messageStates={this.state.messageStates}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
