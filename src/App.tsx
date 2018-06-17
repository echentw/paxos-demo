import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Message } from './lib/message_types';
import PaxosNode from './lib/paxos_node';
import MessagePool from './lib/message_pool';
import Paxos from './lib/paxos';

import { MessagePoolContainer } from './MessagePoolContainer';
import { NodeClusterContainer } from './NodeClusterContainer';

export interface MessageState {
  id: string;
  name: string;
  toNodeId: number;
  fromNodeId: number;
  // proposalNumber: number;
}

export interface NodeState {
  // Global state
  id: number;
  isProposing: boolean;
  proposalNumber: number;
  acceptedValue: string | null;

  // Proposer state
  proposedValue: string;
  responses: number;
  // stage: 'Prepare';
}

function getNodeStates(paxos: Paxos): Array<NodeState> {
  return paxos.nodes.map((node, index) => {
    if (node.getId() !== index) {
      throw Error('Something is terribly wrong!!!');
    }
    return {
      id: node.getId(),
      isProposing: node.isProposing(),
      proposalNumber: node.getProposalNumber(),
      acceptedValue: node.getAcceptedValue(),

      proposedValue: node.getProposedValue(),
      responses: node.getNumResponses(),
    };
  });
}

function getMessageStates(paxos: Paxos): Array<MessageState> {
  return paxos.messagePool.idMessagePairs.map((pair) => {
    const { id, message } = pair;
    return {
      id: id,
      name: message.kind,
      toNodeId: message.toNodeId,
      fromNodeId: message.fromNodeId,
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
    const toNode = paxos.getNodeById(message.toNodeId);
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
        <NodeClusterContainer
          paxos={this.state.paxos}
          initiatePaxos={this.initiatePaxos}
          nodeStates={this.state.nodeStates}
        />
        <MessagePoolContainer
          paxos={this.state.paxos}
          deliverMessage={this.deliverMessage}
          messageStates={this.state.messageStates}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
