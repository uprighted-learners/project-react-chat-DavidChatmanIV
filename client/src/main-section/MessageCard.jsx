import MessageFeed from "/MessageFeed";

function MessageCard(props) {
  console.log(props.isAdmin);
  return (
    <>
      {props.MessageCardItems.map((message, user, roomId, when) => (
        <MessageCard
          key={user}
          message={message}
          room={roomId}
          when={when}
          token={props.token}
          fetchMessageFeed={props.fetchMessageFeed}
          userId={props.user}
          isAdmin={props.isAdmin}
        />
      ))}
    </>
  );
}

export default MessageCard;
