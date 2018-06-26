import * as React from 'react';

import Paxos from './lib/paxos';

import { MessageState } from './AppState';
import MessageComponent from './MessageComponent';

interface ComponentProps {
  paxos: Paxos;
  nodeId: number;
  messageStates: Array<MessageState>;
  deliverMessage: (messageId: string) => void;
}

export default class MessagesComponent extends React.Component<ComponentProps, {}> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render() {
    const { nodeId, messageStates } = this.props;
    const messageComponents = messageStates.map((messageState) =>
      <MessageComponent
        messageState={messageState}
        deliverMessage={this.props.deliverMessage}
      />
    );
    return (
      <div className="messages-outer-container">
        <div className="messages-label">Messages for Node #{nodeId}</div>
        <div className="messages-inner-container">
          {messageComponents}
        </div>
      </div>
    );
  }
}
