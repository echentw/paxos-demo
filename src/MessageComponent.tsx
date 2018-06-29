import * as React from 'react';

import {
  Message,
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
} from './lib/message_types';

import { MessageState } from './AppState';

interface MessageComponentProps {
  messageState: MessageState,
  deliverMessage: (messageId: string) => void;
  dropMessage: (messageId: string) => void;
}

const MessageHeadersComponent = ({ name, message }: { name: string, message: Message }) => {
  const { proposalNumber, fromNodeId, toNodeId } = message.headers;
  return (
    <div className="message-header-component">
      <div className="message-text">{name}</div>
      <div className="message-text">PN {proposalNumber}</div>
      <div className="message-text">from node #{fromNodeId}</div>
    </div>
  );
};

interface ButtonsComponentProps {
  deliver: () => void;
  drop: () => void;
}

const ButtonsComponent = (props: ButtonsComponentProps) => {
  const { deliver, drop } = props;
  return (
    <div className="message-buttons-container">
      <button className="message-deliver-button" onClick={deliver}>
        Deliver
      </button>
      <button className="message-drop-button" onClick={drop}>
        Drop
      </button>
    </div>
  );
};

export default class MessageComponent extends React.Component<MessageComponentProps, {}> {
  constructor(props: MessageComponentProps) {
    super(props);
  }

  extractNameAndBodyTexts = (message: Message) => {
    let name;
    let bodyTexts;
    switch(message.kind) {
      case 'PrepareRequest': {
        name = 'Prepare Request';
        bodyTexts = [];
        break;
      }
      case 'PrepareResponse': {
        const response = message as PrepareResponse;
        const { highestSeenProposalNumber, acceptedValue } = response.body;
        name = 'Prepare Response';
        bodyTexts = [
          `prev promised PN: ${highestSeenProposalNumber}`,
          `accepted value: ${acceptedValue}`,
        ];
        break;
      }
      case 'AcceptRequest': {
        const request = message as AcceptRequest;
        const { proposedValue } = request.body;
        name = 'Accepted Request';
        bodyTexts = [`PV: ${proposedValue}`];
        break;
      }
      case 'AcceptResponse': {
        const response = message as AcceptResponse;
        const { accepted, highestSeenProposalNumber } = response.body;
        name = 'Accept Response';
        if (accepted) {
          bodyTexts = ['ACCEPTED'];
        } else {
          bodyTexts = [
            'REJECTED',
            `highest seen PN: ${highestSeenProposalNumber}`,
          ];
        }
        break;
      }
    }
    return {
      name: name,
      bodyTexts: bodyTexts,
    };
  }

  deliverMessage = () => {
    const { id } = this.props.messageState;
    this.props.deliverMessage(id);
  }

  dropMessage = () => {
    const { id } = this.props.messageState;
    this.props.dropMessage(id);
  }

  render() {
    const { messageState, deliverMessage, dropMessage } = this.props;
    const { id, message } = messageState;

    const { name, bodyTexts } = this.extractNameAndBodyTexts(message);

    const bodyTextComponents = bodyTexts.map((text) => <div className="message-text">{text}</div>);

    return (
      <div className="message-container" id={id}>
        <div className="message-text-container">
          <MessageHeadersComponent name={name} message={message}/>
          {bodyTextComponents}
        </div>
        <ButtonsComponent
          deliver={this.deliverMessage}
          drop={this.dropMessage}
        />
      </div>
    );
  }
}
