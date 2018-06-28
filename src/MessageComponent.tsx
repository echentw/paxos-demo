import * as React from 'react';
import { DragSource } from 'react-dnd';

import {
  Message,
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
} from './lib/message_types';

import { MessageState } from './AppState';

const messageDragSource = {
  beginDrag(props) {
    return {
      messageId: props.messageState.id,
      toNodeId: props.messageState.message.headers.toNodeId,
    };
  },

  endDrag(props, monitor) {
    if (monitor.getDropResult()) {
      props.deliverMessage(props.messageState.id);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

interface MessageComponentProps {
  messageState: MessageState,
  deliverMessage: (messageId: String) => void;
  connectDragSource: Function,
  isDragging: boolean,
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

class MessageComponent extends React.Component<MessageComponentProps, {}> {
  constructor(props: MessageComponentProps) {
    super(props);
  }

  render() {
    const { connectDragSource, isDragging, messageState, deliverMessage } = this.props;
    const { id, message } = messageState;

    const classes = isDragging ? 'message-container is-dragging' : 'message-container';

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

    const bodyTextComponents = bodyTexts.map((text) => <div className="message-text">{text}</div>);

    const component = (
      <div className={classes} id={id}>
        <div className="message-text-container">
          <MessageHeadersComponent name={name} message={message}/>
          {bodyTextComponents}
        </div>
        <ButtonsComponent
          deliver={() => deliverMessage(id)}
          drop={() => console.log('drop has not been implemented yet!')}
        />
      </div>
    );

    return connectDragSource(component);
  }
}

export default DragSource('message', messageDragSource, collect)(MessageComponent);
