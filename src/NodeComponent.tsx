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
    return toNodeId === id;
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

const ProposerComponent = ({ proposerState }) => {
  const { isProposing, proposalNumber, proposedValue, responses, phase } = proposerState;
  return (
    <div className="proposer-component">
      <div className="node-text">
        Proposal #: {proposalNumber}
      </div>
      <div className="node-text">
        isProposing: {isProposing ? 'true' : 'false'}
      </div>
      <div className="node-text">
        proposed value: {proposedValue}
      </div>
    </div>
  );
};

const ReceiverComponent = ({ receiverState }) => {
  const { highestSeenProposalNumber, acceptedValue } = receiverState;
  return (
    <div className="receiver-component">
      <div className="node-text">
        Accepted Value: {receiverState.acceptedValue}
      </div>
    </div>
  );
};

const LearnerComponent = ({ learnerState }) => {
  const { responses, learnedValue } = learnerState;
  return (
    <div className="learner-component">
      <div className="node-text">
        learnedValue: {learnerState.learnedValue}
      </div>
    </div>
  );
};

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
        <div className="node-text">
          Id: {id}
        </div>
        <ProposerComponent proposerState={proposerState}/>
        <ReceiverComponent receiverState={receiverState}/>
        <LearnerComponent learnerState={learnerState}/>
      </div>
    );
  }
}

export default DropTarget('message', nodeDropTarget, collect)(NodeComponent);
