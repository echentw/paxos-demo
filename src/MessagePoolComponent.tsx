import * as React from 'react';

import MessagePool, { IdMessagePair } from './lib/message_pool';
import Paxos from './lib/paxos';

import { MessageState } from './App';

import MessageComponent from './MessageComponent';


interface MessagePoolComponentProps {
  paxos: Paxos;
  messageStates: Array<MessageState>;
  deliverMessage: (messageId: String) => void;
}

export default class MessagePoolComponent extends React.Component<MessagePoolComponentProps, {}> {
  constructor(props: MessagePoolComponentProps) {
    super(props);
  }

  render() {
    const { messageStates } = this.props;
    const messageComponents = messageStates.map((messageState) => 
      <MessageComponent
        messageState={messageState}
        deliverMessage={this.props.deliverMessage}
      />
    );

    return (
      <div className="message-pool-container">
        {messageComponents}
      </div>
    );
  }
}
