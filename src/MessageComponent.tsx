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
    const { toNodeId, fromNodeId, proposalNumber } = message.headers;

    const classes = isDragging ? 'message-container is-dragging' : 'message-container';
    let component;
    switch(message.kind) {
      case 'PrepareRequest': {
        component = (
          <div className={classes} id={id}>
            <div className="message-text-container">
              <MessageHeadersComponent name="Prepare Request" message={message}/>
            </div>
            <ButtonsComponent
              deliver={() => deliverMessage(id)}
              drop={() => console.log('drop has not been implemented yet!')}
            />
          </div>
        );
        break;
      }
      case 'PrepareResponse': {
        const response = message as PrepareResponse;
        const { highestSeenProposalNumber, acceptedValue } = response.body;
        component = (
          <div className={classes} id={id}>
            <div className="message-text-container">
              <MessageHeadersComponent name="Prepare Response" message={message}/>
              <div className="message-text">prev promised PN: {highestSeenProposalNumber}</div>
              <div className="message-text">accepted value: {acceptedValue}</div>
            </div>
          </div>
        );
        break;
      }
      case 'AcceptRequest': {
        const request = message as AcceptRequest;
        const { proposedValue } = request.body;
        component = (
          <div className={classes} id={id}>
            <MessageHeadersComponent name="Accept Request" message={message}/>
            <div className="message-text">PV: {proposedValue}</div>
          </div>
        );
        break;
      }
      case 'AcceptResponse': {
        const response = message as AcceptResponse;
        const { accepted, highestSeenProposalNumber } = response.body;
        if (accepted) {
          component = (
            <div className={classes} id={id}>
              <MessageHeadersComponent name="Accept Response" message={message}/>
              <div className="message-text">ACCEPTED</div>
            </div>
          );
        } else {
          component = (
            <div className={classes} id={id}>
              <MessageHeadersComponent name="Accept Response" message={message}/>
              <div className="message-text">REJECTED</div>
              <div className="message-text">highest seen proposal #: {highestSeenProposalNumber}</div>
            </div>
          );
        }
        break;
      }
    }
    return connectDragSource(component);
  }
}

export default DragSource('message', messageDragSource, collect)(MessageComponent);
