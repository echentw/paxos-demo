import * as React from 'react';

import { MessagePool, IdMessagePair } from './lib/message_pool';
import Paxos from './lib/paxos';

import MessageContainer from './MessageContainer';


interface MessagePoolContainerProps {
  paxos: Paxos;
  deliverMessage: (messageId: String) => void;
}

export class MessagePoolContainer extends React.Component<MessagePoolContainerProps, {}> {
  constructor(props: MessagePoolContainerProps) {
    super(props);
  }

  render() {
    const { messagePool } = this.props.paxos;
    const messageContainers = messagePool.idMessagePairs.map((pair: IdMessagePair) =>
      <MessageContainer
        id={pair.id}
        message={pair.message}
        deliverMessage={this.props.deliverMessage}
      />
    );
    return (
      <div className="message-pool-container">
        {messageContainers}
      </div>
    );
  }
}
