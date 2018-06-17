import * as React from 'react';

import MessagePool, { IdMessagePair } from './lib/message_pool';
import Paxos from './lib/paxos';

import { MessageState } from './App';

import MessageContainer from './MessageContainer';


interface MessagePoolContainerProps {
  paxos: Paxos;
  messageStates: Array<MessageState>;
  deliverMessage: (messageId: String) => void;
}

export class MessagePoolContainer extends React.Component<MessagePoolContainerProps, {}> {
  constructor(props: MessagePoolContainerProps) {
    super(props);
  }

  render() {
    const { messageStates } = this.props;
    const messageContainers = messageStates.map((messageState) => 
      <MessageContainer
        messageState={messageState}
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
