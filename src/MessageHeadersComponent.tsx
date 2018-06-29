import * as React from 'react';

import { Message } from './lib/message_types';


interface ComponentProps {
  name: string,
  message: Message,
}

const MessageHeadersComponent = ({ name, message }: ComponentProps) => {
  const { proposalNumber, fromNodeId, toNodeId } = message.headers;
  return (
    <div className="message-header-component">
      <div className="message-text">{name}</div>
      <div className="message-text">PN {proposalNumber}</div>
      <div className="message-text">from node #{fromNodeId}</div>
    </div>
  );
};

export default MessageHeadersComponent;
