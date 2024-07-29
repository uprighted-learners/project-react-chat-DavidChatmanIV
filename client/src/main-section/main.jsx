import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import MessageFeed from "./MessageFeed";
import { API_MESSAGE_VIEW_ALL } from "../../Constants/endpoints";

function MainIndex(props) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  async function fetchMessageFeed() {
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);

      // Request Options
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      // debugger
      // Send Request
      const response = await fetch(API_MESSAGE_VIEW_ALL, requestOptions);
      //  Get A Response
      const data = await response.json();
      console.log(data);
      // Set State
      setMessages(data.messages);
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (!props.token) return;
    fetchMessageFeed();
  }, [props.token]);

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <h1>Message Feed</h1>

          <MessageFeed messages={messages} user={user} />
        </Col>
      </Row>
    </Container>
  );
}

export default MainIndex;
