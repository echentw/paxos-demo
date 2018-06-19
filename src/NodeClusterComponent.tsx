import * as React from 'react';

import { Message } from './lib/message_types';
import PaxosNode from './lib/paxos_node';
import Paxos from './lib/paxos';

import { NodeState } from './App';

import NodeComponent from './NodeComponent';


interface NodeClusterComponentProps {
  paxos: Paxos;
  nodeStates: Array<NodeState>;
  initiatePaxos: (nodeId: number, proposedValue: string) => void;
}

export default class NodeClusterComponent extends React.Component<NodeClusterComponentProps, {}> {
  constructor(props: NodeClusterComponentProps) {
    super(props);
  }

  render() {
    const { nodeStates } = this.props;
    const nodeComponents = nodeStates.map((nodeState) =>
      <NodeComponent
        nodeState={nodeState}
        initiatePaxos={this.props.initiatePaxos}
        paxos={this.props.paxos}
      />
    );
    return (
      <div className="nodes-container">
        {nodeComponents}
      </div>
    );
  }
}
