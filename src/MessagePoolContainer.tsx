import * as React from 'react';

import { Message } from './lib/message';
import { MessagePool, IdMessagePair } from './lib/message_pool';


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
    const messageContainers = this.props.messagePool.idMessagePairs.map((pair: IdMessagePair) => {
      return <MessageContainer/>;
    });
    return (
      <div className="message-pool-container">
        {messageContainers}
      </div>
    );
  }
}

