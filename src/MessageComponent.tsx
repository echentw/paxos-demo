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
      toNodeId: props.messageState.toNodeId,
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
    const { id, name, toNodeId, fromNodeId } = messageState;
    const classes = isDragging ? 'message is-dragging' : 'message';
    let component;
    switch(name) {
      case 'PrepareStageRequest': {
        component = (
          <div className={classes} id={id}>
            <div className="message-kind">Prepare Request</div>
            <div className="message-from">From: #{fromNodeId}</div>
            <div className="message-to">To: #{toNodeId}</div>
            <div className="message-proposal-number">Proposal #TODO</div>
          </div>
        );
        break;
      }
      case 'PrepareStageResponse': {
        // TODO: handle this case
      }
      case 'AcceptStageRequest': {
        // TODO: handle this case
      }
      case 'AcceptStageResponse': {
        // TODO: handle this case
        component = (
          <div className={classes} id={id}>
          </div>
        );
        break;
      }
    }
    return connectDragSource(component);
  }
}

export default DragSource('message', messageDragSource, collect)(MessageComponent);
