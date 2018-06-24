import * as React from 'react';
import { DropTarget } from 'react-dnd';

import { Message } from './lib/message_types';
import PaxosNode from './lib/paxos_node';
import Paxos from './lib/paxos';

import { NodeState, ProposerState, ReceiverState, LearnerState } from './AppState';


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

const ProposerComponent = ({ proposerState }: { proposerState: ProposerState }) => {
  const { isProposing, proposalNumber, proposedValue, responses, phase } = proposerState;
  if (isProposing) {
    return (
      <div className="proposer-component">
        <div className="node-text">Proposer State</div>
        <div className="node-text">
          - proposal #: {proposalNumber}
        </div>
        <div className="node-text">
          - proposed value: {proposedValue}
        </div>
        <div className="node-text">
          - responses: {responses}
        </div>
        <div className="node-text">
          - phase: {phase}
        </div>
      </div>
    );
  } else {
    return (
      <div className="proposer-component">
        <div className="node-text">Proposer State</div>
        <div className="node-text">
          - not proposing
        </div>
      </div>
    );
  }
};

const ReceiverComponent = ({ receiverState }: { receiverState: ReceiverState }) => {
  const { highestSeenProposalNumber, acceptedValue } = receiverState;
  return (
    <div className="receiver-component">
      <div className="node-text">Receiver State</div>
      <div className="node-text">
        - highest-seen proposal #: {receiverState.highestSeenProposalNumber}
      </div>
      <div className="node-text">
        - accepted Value: {receiverState.acceptedValue}
      </div>
    </div>
  );
};

const LearnerComponent = ({ learnerState }: { learnerState: LearnerState }) => {
  const { responses, learnedValue } = learnerState;
  return (
    <div className="learner-component">
      <div className="node-text">Learner State</div>
      <div className="node-text">
        - responses: {learnerState.responses}
      </div>
      <div className="node-text">
        - learned value: {learnerState.learnedValue}
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

    const { id, proposer, receiver, learner } = nodeState;

    const classes = isOver ? 'node-component is-over' : 'node-component';
    return connectDropTarget(
      <div className={classes} onClick={this.handleClick}>
        <div className="node-text">
          Node #{id}
        </div>
        <ProposerComponent proposerState={proposer}/>
        <ReceiverComponent receiverState={receiver}/>
        <LearnerComponent learnerState={learner}/>
      </div>
    );
  }
}

export default DropTarget('message', nodeDropTarget, collect)(NodeComponent);
