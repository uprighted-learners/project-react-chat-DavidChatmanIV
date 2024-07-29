import React from "react";
import Roomcard from "./Roomcard";

function RoomFeed(props) {
  console.log(props.isAdmin);
  return (
    <>
      {props.roomFeedItems.map((room, index) => (
        <Roomcard
          key={index}
          room={room}
          token={props.token}
          fetchRoomFeed={props.fetchRoomFeed}
          userId={room.id}
        />
      ))}
    </>
  );
}

export default RoomFeed;
