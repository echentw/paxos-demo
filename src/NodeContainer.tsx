import * as React from 'react';
import { DropTarget } from 'react-dnd';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';


const nodeDropTarget = {
  drop(props, monitor) {
    console.log('node is detecting a drop on top of it');
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

interface NodeContainerProps {
  node: PaxosNode;
  createNewMessages: (messages: Array<Message>) => void;
  connectDropTarget: Function,
  isOver: boolean,
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
    const { connectDropTarget, isOver } = this.props;
    const classes = isOver ? 'node is-over' : 'node';
    return connectDropTarget(
      <div className={classes} onClick={this.handleClick}></div>
    );
  }
}

export default DropTarget('message', nodeDropTarget, collect)(NodeContainer);
