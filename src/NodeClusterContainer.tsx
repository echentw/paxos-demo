import * as React from 'react';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';
import Paxos from './lib/paxos';

import { NodeState } from './App';

import NodeContainer from './NodeContainer';


interface NodeClusterContainerProps {
  paxos: Paxos;
  nodeStates: Array<NodeState>;
  initiatePaxos: (nodeId: number, proposedValue: string) => void;
}

export class NodeClusterContainer extends React.Component<NodeClusterContainerProps, {}> {
  constructor(props: NodeClusterContainerProps) {
    super(props);
  }

  render() {
    const { nodeStates } = this.props;
    const nodeContainers = nodeStates.map((nodeState) =>
      <NodeContainer
        nodeState={nodeState}
        initiatePaxos={this.props.initiatePaxos}
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
