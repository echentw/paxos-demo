import * as React from 'react';

import { Message } from './lib/message';

import { PaxosNode } from './lib/paxos_node';
import { MessagePool } from './lib/message_pool';

import { MessagePoolContainer } from './MessagePoolContainer';
import { NodeClusterContainer } from './NodeClusterContainer';


export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const messagePool = new MessagePool();
    const nodes = [
      new PaxosNode(0, 5),
      new PaxosNode(1, 5),
      new PaxosNode(2, 5),
      new PaxosNode(3, 5),
      new PaxosNode(4, 5),
    ];
    nodes.forEach((node) => node.initializeNodeList(nodes));

    this.state = {
      messagePool: messagePool,
      nodes: nodes,
    };
  }

  createNewMessages = (messages: Array<Message>): void => {
    messages.forEach((message) => {
      this.state.messagePool.addMessage(message);
    });
    this.setState({
      messagePool: this.state.messagePool,
    });
  }

  render() {
    return (
      <div className="container">
        <NodeClusterContainer
          nodes={this.state.nodes}
          createNewMessages={this.createNewMessages}
        />
        <MessagePoolContainer messagePool={this.state.messagePool}/>
      </div>
    );
  }
}
