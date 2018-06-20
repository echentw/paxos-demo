import * as React from 'react';
import { DragSource } from 'react-dnd';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
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
    const { kind, toNodeId, fromNodeId } = message;
    const classes = isDragging ? 'message is-dragging' : 'message';
    let component;
    switch(kind) {
      case 'PrepareStageRequest': {
        const prepareRequest = message as PrepareStageRequest;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Prepare Request</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #{prepareRequest.proposalNumber}</div>
          </div>
        );
        break;
      }
      case 'PrepareStageResponse': {
        const prepareResponse = message as PrepareStageResponse;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Prepare Response</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #{prepareResponse.previouslyHighestSeenProposalNumber}</div>
            <div className="message-text">Accepted value: {prepareResponse.previouslyAcceptedValue}</div>
          </div>
        );
        break;
      }
      case 'AcceptStageRequest': {
        const acceptRequest = message as AcceptStageRequest;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Prepare Response</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #: #{acceptRequest.proposalNumber}</div>
            <div className="message-text">Proposed Value: {acceptRequest.proposedValue}</div>
          </div>
        );
        break;
      }
      case 'AcceptStageResponse': {
        const acceptResponse = message as AcceptStageResponse;
        component = (
          <div className={classes} id={id}>
            <div className="message-text">Prepare Response</div>
            <div className="message-text">From: #{fromNodeId}</div>
            <div className="message-text">To: #{toNodeId}</div>
            <div className="message-text">Proposal #: #{acceptResponse.highestSeenProposalNumber}</div>
            <div className="message-text">Accepted Value: {acceptResponse.acceptedValue}</div>
          </div>
        );
        break;
      }
    }
    return connectDragSource(component);
  }
}

export default DragSource('message', messageDragSource, collect)(MessageComponent);
