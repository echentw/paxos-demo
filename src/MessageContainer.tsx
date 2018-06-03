import * as React from 'react';
import { DragSource } from 'react-dnd';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
} from './lib/message';

const messageDragSource = {
  beginDrag(props) {
    return {
      messageId: props.id,
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

interface MessageContainerProps {
  id: string,
  message: Message,
  connectDragSource: Function,
  isDragging: Function,
}

class MessageContainer extends React.Component<MessageContainerProps, {}> {
  constructor(props: MessageContainerProps) {
    super(props);
  }

  render() {
    const { connectDragSource, isDragging, message } = this.props;
    let component;
    switch(message.kind) {
      case 'PrepareStageRequest': {
        component = (
          <div className="message" id={this.props.id}>
            <div className="message-kind">Prepare Request</div>
            <div className="message-from">To: some node</div>
            <div className="message-to">From: other node</div>
            <div className="message-proposal-number">Proposal #{message.proposalNumber}</div>
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
          <div className="message" id={this.props.id}>
          </div>
        );
        break;
      }
    }
    return connectDragSource(component);
  }
}

export default DragSource('message', messageDragSource, collect)(MessageContainer);
