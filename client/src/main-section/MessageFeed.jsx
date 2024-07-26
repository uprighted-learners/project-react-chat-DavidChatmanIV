import React, { useState, useEffect } from "react";

import MessageCard from "./MessageCard";

const MessageFeed = (props) => {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/displayMessages/${props.messageId}`);

        const data = await response.json();

        setMessages(data);

        setLoading(false);
      } catch (error) {
        setError(error.message);

        setLoading(false);
      }
    };

    fetchMessages();
  }, [props.messageId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "ed" }}>{error}</div>;
  }

  return (
    <div>
      <h2>Message Feed</h2>

      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <MessageCard message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageFeed;
