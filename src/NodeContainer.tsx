import * as React from 'react';
import { DropTarget } from 'react-dnd';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';
import Paxos from './lib/paxos';


const nodeDropTarget = {
  drop(props, monitor, component) {
    return { success: true };
  },

  canDrop(props, monitor) {
    const { node } = props;
    const { messagePool } = props.paxos;
    const { messageId } = monitor.getItem();
    const message = messagePool.peekMessage(messageId);
    return message.toNode == node;
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
  paxos: Paxos;
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
