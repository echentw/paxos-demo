import * as React from 'react';

import { Message } from './lib/message';
import { PaxosNode } from './lib/paxos_node';


interface NodeContainerProps {
  node: PaxosNode;
  createNewMessages: (messages: Array<Message>) => void;
}

export class NodeContainer extends React.Component<NodeContainerProps, {}> {
  constructor(props: NodeContainerProps) {
    super(props);
  }

  handleClick = () => {
    const messages = this.props.node.sendPrepareRequest('cereal');
    this.props.createNewMessages(messages);
  }

  render() {
    return (
      <div className="node" onClick={this.handleClick}></div>
    );
  }
}

