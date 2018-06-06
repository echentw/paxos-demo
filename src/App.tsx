import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Message } from './lib/message';

import { PaxosNode } from './lib/paxos_node';
import { MessagePool } from './lib/message_pool';
import Paxos from './lib/paxos';

import { MessagePoolContainer } from './MessagePoolContainer';
import { NodeClusterContainer } from './NodeClusterContainer';


class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const paxos = new Paxos(5);
    this.state = {
      paxos: paxos,
    };
  }

  createNewMessages = (messages: Array<Message>): void => {
    messages.forEach((message) => {
      this.state.paxos.messagePool.addMessage(message);
    });
    this.setState({ paxos: this.state.paxos });
  }

  deliverMessage = (messageId: String): void => {
    const { messagePool } = this.state.paxos;
    const message: Message = messagePool.retrieveMessage(messageId);
    message.toNode.receiveMessage(message);
    this.setState({ paxos: this.state.paxos });
  }

  render() {
    return (
      <div className="container">
        <NodeClusterContainer
          paxos={this.state.paxos}
          createNewMessages={this.createNewMessages}
        />
        <MessagePoolContainer
          paxos={this.state.paxos}
          deliverMessage={this.deliverMessage}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
