import * as React from 'react';

import {
  Message,
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
} from './lib/message_types';

import { MessageState } from './AppState';
import MessageButtonsComponent from './MessageButtonsComponent';
import MessageHeadersComponent from './MessageHeadersComponent';


interface ComponentProps {
  messageState: MessageState,
  deliverMessage: (messageId: string) => void;
  dropMessage: (messageId: string) => void;
}


export default class MessageComponent extends React.Component<ComponentProps, {}> {
  constructor(props: ComponentProps) {
    super(props);
  }

  extractNameAndBodyTexts = (message: Message): { name: string, bodyTexts: string[] } => {
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
        name = 'Accept Request';
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

  deliverMessage = (): void => {
    const { id } = this.props.messageState;
    this.props.deliverMessage(id);
  }

  dropMessage = (): void => {
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
        <MessageButtonsComponent
          deliver={this.deliverMessage}
          drop={this.dropMessage}
        />
      </div>
    );
  }
}
