import * as React from 'react';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';
import Paxos from './lib/paxos';

import NodeContainer from './NodeContainer';


interface NodeClusterContainerProps {
  paxos: Paxos;
  createNewMessages: (messages: Array<Message>) => void;
}

export class NodeClusterContainer extends React.Component<NodeClusterContainerProps, {}> {
  constructor(props: NodeClusterContainerProps) {
    super(props);
  }

  render() {
    const { nodes } = this.props.paxos;
    const nodeContainers = nodes.map((node) =>
      <NodeContainer
        node={node}
        createNewMessages={this.props.createNewMessages}
        paxos={this.props.paxos}
      />
    );
    return (
      <div className="nodes-container">
        {nodeContainers}
      </div>
    );
  }
}
