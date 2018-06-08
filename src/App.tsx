import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Message } from './lib/message';

import { PaxosNode } from './lib/paxos_node';
import { MessagePool } from './lib/message_pool';
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
      toNodeId: message.toNode.getId(),
      fromNodeId: message.fromNode.getId(),
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
    const node = this.state.paxos.nodes.find((node) => node.getId() == nodeId);
    const messages = node.sendPrepareRequest(proposedValue);
    messages.forEach((message) => {
      this.state.paxos.messagePool.addMessage(message);
    });
    this.setState({
      nodeStates: getNodeStates(this.state.paxos),
      messageStates: getMessageStates(this.state.paxos),
    });
  }

  deliverMessage = (messageId: String): void => {
    const { messagePool } = this.state.paxos;
    const message: Message = messagePool.retrieveMessage(messageId);
    message.toNode.receiveMessage(message);
    this.setState({
      nodeStates: getNodeStates(this.state.paxos),
      messageStates: getMessageStates(this.state.paxos),
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
