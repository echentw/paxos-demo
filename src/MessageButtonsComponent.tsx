import * as React from 'react';

interface MessageButtonsComponentProps {
  deliver: () => void;
  drop: () => void;
}

const MessageButtonsComponent = (props: MessageButtonsComponentProps) => {
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

export default MessageButtonsComponent;
