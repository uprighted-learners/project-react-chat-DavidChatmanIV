import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const MessageCard = (props) => {
  console.log(props);
  const { user, body, when, roomId } = props.message;
  // console.log(props)

  return (
    
      <Card color={white}>
      <CardBody>
        <CardTitle tag ="h4">{when}</CardTitle>

        <CardText>{body}</CardText>

        <p>Posted by: {user.name}</p>

        {roomId && <p>Room: {roomId.name}</p>}
      </CardBody>
    </Card>
  );
};

export default MessageCard;
