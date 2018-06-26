import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Message } from './lib/message_types';
import PaxosNode from './lib/paxos_node';
import MessagePool from './lib/message_pool';
import Paxos from './lib/paxos';

import { NodeState } from './AppState';
import NodeMessagesComponent from './NodeMessagesComponent';

import './styles/appStyles.scss';

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

      messages: paxos.messagePool.getIdMessagePairsToNodeId(node.getId()),
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
    };
  }

  initiatePaxos = (nodeId: number, proposedValue: string): void => {
    const { paxos } = this.state;

    const node = paxos.getNodeById(nodeId);
    const messages = node.generatePrepareRequests(proposedValue);
    messages.forEach((message) => paxos.messagePool.addMessage(message));

    this.setState({
      nodeStates: getNodeStates(paxos),
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
    });
  }

  render() {
    const nodeMessagesComponents = this.state.nodeStates.map((nodeState) =>
      <NodeMessagesComponent
        paxos={this.state.paxos}
        nodeState={nodeState}
        initiatePaxos={this.initiatePaxos}
        deliverMessage={this.deliverMessage}
      />
    );
    return (
      <div className="app-container">
        {nodeMessagesComponents}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
