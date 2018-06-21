import * as React from 'react';
import { DropTarget } from 'react-dnd';

import { Message } from './lib/message_types';
import PaxosNode from './lib/paxos_node';
import Paxos from './lib/paxos';

import { NodeState } from './App';


const nodeDropTarget = {
  drop(props, monitor, component) {
    return { success: true };
  },

  canDrop(props, monitor) {
    const { id } = props.nodeState;
    const { toNodeId } = monitor.getItem();
    return toNodeId == id;
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

interface NodeComponentProps {
  nodeState: NodeState;
  initiatePaxos: (nodeId: number, proposedValue: string) => void;
  paxos: Paxos;
  connectDropTarget: Function,
  isOver: boolean,
}

class NodeComponent extends React.Component<NodeComponentProps, {}> {
  constructor(props: NodeComponentProps) {
    super(props);
  }

  handleClick = () => {
    this.props.initiatePaxos(this.props.nodeState.id, 'cereal');
  }

  render() {
    const { connectDropTarget, isOver, nodeState } = this.props;

    const { id, proposer: proposerState, receiver: receiverState, learner: learnerState } = nodeState;

    const classes = isOver ? 'node is-over' : 'node';
    return connectDropTarget(
      <div className={classes} onClick={this.handleClick}>
        <div className="node-id">
          Id: {id}
        </div>
        <div className="node-proposal-number">
          Proposal #: {proposerState.proposalNumber}
        </div>
        <div className="node-accepted-value">
          Accepted Value: {receiverState.acceptedValue}
        </div>
        <div className="node-is-proposing">
          isProposing: {proposerState.isProposing ? 'true' : 'false'}
        </div>
        <div className="node-is-proposing">
          learnedValue: {learnerState.learnedValue}
        </div>
      </div>
    );
  }
}

export default DropTarget('message', nodeDropTarget, collect)(NodeComponent);
