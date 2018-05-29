import * as React from 'react';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';


interface NodeContainerProps {
  node: PaxosNode;
  createNewMessages: (messages: Array<Message>) => void;
}

class NodeContainer extends React.Component<NodeContainerProps, {}> {
  constructor(props: NodeContainerProps) {
    super(props);
  }

  handleClick = () => {
    const messages = this.props.node.sendPrepareRequest('cereal');
    this.props.createNewMessages(messages);
  }

  render() {
    return (
      <div className="node" onClick={this.handleClick}></div>
    );
  }
}

interface NodeClusterContainerProps {
  nodes: Array<PaxosNode>;
  createNewMessages: (messages: Array<Message>) => void;
}

export class NodeClusterContainer extends React.Component<NodeClusterContainerProps, {}> {
  constructor(props: NodeClusterContainerProps) {
    super(props);
  }

  render() {
    const nodeContainers = this.props.nodes.map((node) =>
      <NodeContainer node={node} createNewMessages={this.props.createNewMessages}/>
    );
    return (
      <div className="nodes-container">
        {nodeContainers}
      </div>
    );
  }
}
