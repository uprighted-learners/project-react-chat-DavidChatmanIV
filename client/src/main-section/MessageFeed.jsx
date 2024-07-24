// import MessageCard from "./MessageCard";

function MessageFeed(props) {
  console.log(props.isAdmin);
  return (
    <>
      {props.MessageFeedItems.map((message, user, roomId, when) => (
        <MessageCard
          key={user}
          message={message}
          room={roomId}
          when={when}
          token={props.token}
          fetchMessageFeed={props.fetchMessageFeed}
          userId={props.userId}
          isAdmin={props.isAdmin}
        />
      ))}
    </>
  );
}

export default MessageFeed;
