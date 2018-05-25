import * as React from 'react';

import { PaxosNode } from './lib/paxos_node';


interface NodeContainerProps {
  node: PaxosNode;
}

class NodeContainer extends React.Component<NodeContainerProps, {}> {
  constructor(props: NodeContainerProps) {
    super(props);
  }

  render() {
    return (
      <div className="node"></div>
    );
  }
}

interface NodeClusterContainerProps {
  nodes: Array<PaxosNode>;
}

export class NodeClusterContainer extends React.Component<NodeClusterContainerProps, {}> {
  constructor(props: NodeClusterContainerProps) {
    super(props);
  }

  render() {
    const nodeContainers = this.props.nodes.map((node) =>
      <NodeContainer node={node}/>
    );
    return (
      <div className="nodes-container">
        {nodeContainers}
      </div>
    );
  }
}

