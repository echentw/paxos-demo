import * as React from 'react';

import { MessagePool } from './lib/message_pool';


class MessageContainer extends React.Component {
  render() {
    return (
      <div className="message"></div>
    );
  }
}

interface MessagePoolContainerProps {
  messagePool: MessagePool;
}

export class MessagePoolContainer extends React.Component<MessagePoolContainerProps, {}> {
  constructor(props: MessagePoolContainerProps) {
    super(props);
  }

  render() {
    return (
      <div className="message-pool-container">
        <MessageContainer/>
        <MessageContainer/>
        <MessageContainer/>
        <MessageContainer/>
        <MessageContainer/>
        <MessageContainer/>
        <MessageContainer/>
        <MessageContainer/>
      </div>
    );
  }
}

