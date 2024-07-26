import React from "react";

const MessageCard = (props) => {
  return (
    <div className="message-card">
      <div className="message-header">
        <span>
          <strong>{props.message.user.username}</strong> ({props.message.when})
        </span>
      </div>

      <div className="message-body">
        <p>{props.message.body}</p>
      </div>
    </div>
  );
};

export default MessageCard;