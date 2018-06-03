import * as React from 'react';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';

import { NodeContainer } from './NodeContainer';


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
