import * as React from 'react';

import { PaxosNode } from './lib/paxos_node';

class NodesContainer extends React.Component {
  render() {
    return (
      <div className="nodes-container">
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
        <div className="node"></div>
      </div>
    );
  }
}

class MessagePoolContainer extends React.Component {
  render() {
    return (
      <div className="message-pool-container">
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
        <div className="message"></div>
      </div>
    );
  }
}

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NodesContainer/>
        <MessagePoolContainer/>
      </div>
    );
  }
}
