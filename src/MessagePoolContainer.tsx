import * as React from 'react';

import { MessagePool, IdMessagePair } from './lib/message_pool';

import { MessageContainer } from './MessageContainer';


interface MessagePoolContainerProps {
  messagePool: MessagePool;
}

export class MessagePoolContainer extends React.Component<MessagePoolContainerProps, {}> {
  constructor(props: MessagePoolContainerProps) {
    super(props);
  }

  render() {
    const messageContainers = this.props.messagePool.idMessagePairs.map((pair: IdMessagePair) => {
      return <MessageContainer id={pair.id} message={pair.message}/>;
    });
    return (
      <div className="message-pool-container">
        {messageContainers}
      </div>
    );
  }
}
