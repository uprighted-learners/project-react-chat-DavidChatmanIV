import { Col, Container, Row } from "reactstrap";
import RoomFeed from "./Roomfeed";
import { API_ROOM_VIEW_ALL } from "../../Constants/endpoints";
import React, { useState, useEffect } from "react";

function MainIndex(props) {
  const [roomFeedItems, setRoomFeedItems] = useState([]);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(null);

  async function fetchRoomFeed() {
    console.log(props);

    if (!props.token) {
      console.error("Token is missing");
      return;
    }

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
      const response = await fetch(API_ROOM_VIEW_ALL, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status; $response.status`);
      }
      //  Get A Response
      const data = await response.json();
      console.log(data);
      // Set State
      setRoomFeedItems(data.room.reverse());
      setUserId(data.userId);
    } catch (error) {
      console.error(error);
    }
  }
  // uef
  //  putting [props.token] will make it so that it only runs when the token changes
  useEffect(() => {
    if (!props.token);
    fetchRoomFeed();
  }, [props.token]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="8">
            <RoomFeed
              roomFeedItems={roomFeedItems}
              token={props.token}
              fetchRoomFeed={fetchRoomFeed}
              userId={userId}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainIndex;

