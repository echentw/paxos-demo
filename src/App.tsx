import * as React from 'react';

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

interface AppState {
  paxos: Paxos;
  nodeStates: Array<NodeState>;
  nodeIdDraftingProposal: number; // -1 if none, otherwise it's the id of the node
}

export default class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    const paxos = new Paxos(5);
    this.state = {
      paxos: paxos,
      nodeStates: getNodeStates(paxos),
      nodeIdDraftingProposal: -1,
    };
  }

  beginDraftingProposal = (nodeId: number): void => {
    this.setState({ nodeIdDraftingProposal: nodeId });
  }

  endDraftingProposal = (): void => {
    this.setState({ nodeIdDraftingProposal: -1 });
  }

  initiatePaxos = (nodeId: number, proposedValue: string): void => {
    const { paxos } = this.state;

    const node = paxos.getNodeById(nodeId) as PaxosNode;
    const messages = node.generatePrepareRequests(proposedValue);
    messages.forEach((message) => paxos.messagePool.addMessage(message));

    this.setState({
      nodeStates: getNodeStates(paxos),
    });
  }

  deliverMessage = (messageId: string): void => {
    const { paxos } = this.state;

    const message: Message = paxos.messagePool.retrieveMessage(messageId) as Message;
    const toNode = paxos.getNodeById(message.headers.toNodeId) as PaxosNode;
    const responses = toNode.receiveMessage(message);
    responses.forEach((response) => paxos.messagePool.addMessage(response));

    this.setState({
      nodeStates: getNodeStates(paxos),
    });
  }

  dropMessage = (messageId: string): void => {
    const { paxos } = this.state;
    paxos.messagePool.dropMessage(messageId);
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
        dropMessage={this.dropMessage}
        beginDraftingProposal={this.beginDraftingProposal}
        endDraftingProposal={this.endDraftingProposal}
        nodeIdDraftingProposal={this.state.nodeIdDraftingProposal}
      />
    );
    return (
      <div className="app-container">
        {nodeMessagesComponents}
      </div>
    );
  }
}
