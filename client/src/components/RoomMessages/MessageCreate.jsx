import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const MessageCreate = (props) => {
  const [body, setBody] = useState("");

  const [username, setUsername] = useState(props.username);

  useEffect(() => {
    setUsername(props.username);
  }, [props.username]);

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
    <Container>
      <h2>Create a new message</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="body">Body:</Label>
          <Input
            type="text"
            id="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Create Message
        </Button>
      </Form>
    </Container>
  );
};

export default MessageCreate;
