import * as React from 'react';

import { Droppable } from '@shopify/draggable';

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

  componentDidMount() {
    const containers = document.querySelectorAll('.message');
    console.log(containers);
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
