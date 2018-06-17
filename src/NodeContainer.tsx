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

interface NodeContainerProps {
  nodeState: NodeState;
  initiatePaxos: (nodeId: number, proposedValue: string) => void;
  paxos: Paxos;
  connectDropTarget: Function,
  isOver: boolean,
}

class NodeContainer extends React.Component<NodeContainerProps, {}> {
  constructor(props: NodeContainerProps) {
    super(props);
  }

  handleClick = () => {
    this.props.initiatePaxos(this.props.nodeState.id, 'cereal');
  }

  render() {
    const { connectDropTarget, isOver, nodeState } = this.props;
    const { id, isProposing, proposalNumber, acceptedValue, proposedValue, responses } = nodeState;
    console.log('id', id, 'isProposing', isProposing);
    const classes = isOver ? 'node is-over' : 'node';
    return connectDropTarget(
      <div className={classes} onClick={this.handleClick}>
        <div className="node-id">
          Id: {id}
        </div>
        <div className="node-proposal-number">
          Proposal #: {proposalNumber}
        </div>
        <div className="node-accepted-value">
          Accepted Value: {acceptedValue}
        </div>
        <div className="node-is-proposing">
          isProposing: {isProposing ? 'true' : 'false'}
        </div>
      </div>
    );
  }
}

export default DropTarget('message', nodeDropTarget, collect)(NodeContainer);
