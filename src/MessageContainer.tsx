import * as React from 'react';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
} from './lib/message';

interface MessageContainerProps {
  id: string,
  message: Message,
}

export class MessageContainer extends React.Component<MessageContainerProps, {}> {
  constructor(props: MessageContainerProps) {
    super(props);
  }

  render() {
    const { message } = this.props;
    switch(message.kind) {
      case 'PrepareStageRequest': {
        return (
          <div className="message" id={this.props.id}>
            <div className="message-kind">Prepare Request</div>
            <div className="message-from">To: some node</div>
            <div className="message-to">From: other node</div>
            <div className="message-proposal-number">Proposal #{message.proposalNumber}</div>
          </div>
        );
      }
      case 'PrepareStageResponse': {
        // TODO: handle this case
        break;
      }
      case 'AcceptStageRequest': {
        // TODO: handle this case
        break;
      }
      case 'AcceptStageResponse': {
        // TODO: handle this case
        break;
      }
    }

    // TODO: get rid of this eventually
    return (
      <div className="message" id={this.props.id}>
      </div>
    );
  }
}

