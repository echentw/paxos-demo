import * as React from 'react';
import { DragSource } from 'react-dnd';

import {
  Message,
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
} from './lib/message_types';

import { MessageState } from './App';

const messageDragSource = {
  beginDrag(props) {
    return {
      messageId: props.messageState.id,
      toNodeId: props.messageState.message.toNodeId,
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

class MessageComponent extends React.Component<MessageComponentProps, {}> {
  constructor(props: MessageComponentProps) {
    super(props);
  }

  render() {
    const { connectDragSource, isDragging, messageState } = this.props;
    const { id, message } = messageState;
    const { toNodeId, fromNodeId, proposalNumber } = message.headers;

    const classes = isDragging ? 'message is-dragging' : 'message';
    let component;
    switch(message.kind) {
      case 'PrepareRequest': {
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Prepare Request</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #{proposalNumber}</div>
          </div>
        );
        break;
      }
      case 'PrepareResponse': {
        const response = message as PrepareResponse;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Prepare Response</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #{proposalNumber}</div>
            <div className="message-text">Highest previous proposal #{response.body.highestSeenProposalNumber}</div>
            <div className="message-text">Accepted value: {response.body.acceptedValue}</div>
          </div>
        );
        break;
      }
      case 'AcceptRequest': {
        const request = message as AcceptRequest;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Accept Request</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #: #{proposalNumber}</div>
            <div className="message-text">Proposed Value: {request.body.proposedValue}</div>
          </div>
        );
        break;
      }
      case 'AcceptResponse': {
        const response = message as AcceptResponse;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Accept Response</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #: #{proposalNumber}</div>
            <div className="message-text">Accepted Value: {response.body.acceptedValue}</div>
          </div>
        );
        break;
      }
    }
    return connectDragSource(component);
  }
}

export default DragSource('message', messageDragSource, collect)(MessageComponent);
