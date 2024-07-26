import React, { useState, useContext } from "react";

const MessageCreate = (props) => {
  const [body, setBody] = useState("");

  const [username, setUsername] = useState(props.username);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/createMessage", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ body, username }),
      });

      const data = await response.json();

      props.onCreateMessage(data);

      setBody("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="message-create">
      <h2>Create a new message</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Body:
          <input
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </label>

        <button type="submit">Create Message</button>
      </form>
    </div>
  );
};

export default MessageCreate;
