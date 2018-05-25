import * as React from 'react';

import { PaxosNode } from './lib/paxos_node';
import { MessagePool } from './lib/message_pool';

import { MessagePoolContainer } from './MessagePoolContainer';
import { NodeClusterContainer } from './NodeClusterContainer';


export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const messagePool: MessagePool = new MessagePool();
    const nodes = [
      new PaxosNode(messagePool, 0, 5),
      new PaxosNode(messagePool, 1, 5),
      new PaxosNode(messagePool, 2, 5),
      new PaxosNode(messagePool, 3, 5),
      new PaxosNode(messagePool, 4, 5),
    ];
    this.state = {
      messagePool: messagePool,
      nodes: nodes,
    };
  }

  render() {
    return (
      <div className="container">
        <NodeClusterContainer nodes={this.state.nodes}/>
        <MessagePoolContainer messagePool={this.state.messagePool}/>
      </div>
    );
  }
}
