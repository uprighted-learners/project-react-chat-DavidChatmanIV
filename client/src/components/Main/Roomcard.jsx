// import {
//   Card,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardText,
//   Button,
// } from "reactstrap";

// import { API_ROOM_VIEW_ALL } from "../../Constants/endpoints";
// import { ART_ROOM_DELETE_BY_ID } from "../../Constants/endpoints";
// import { useNavigate } from "react-router-dom";

// function RoomCard(props) {
//   console.log(props);
//   const { name, addedUsers, description, _id } = props.room;
//   const naviage = useNaviagate();
//   // console.log(props);

//   function handleShare() {
//     navigate("/feed" + _id);
//   }

//   return (
//     <Card className="mb-3" style={{ width: "100%" }}>
//       <CardBody>
//         <CardTitle tag="h5">{name}</CardTitle>
//         <CardSubtitle className="mb-2 text-muted" tag="h6">
//           {addedUsers}
//         </CardSubtitle>
//         <CardText>{description}</CardText>
//         <Button onClick={handleShare}>Join Room</Button>
//         {props.userId === props.room?.ownerId?._id && (
//           <Button color="danger">Delete</Button>
//         )}
//       </CardBody>
//     </Card>
//   );
// }

// export default RoomCard;

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import {
  API_ROOM_VIEW_ALL,
  ART_ROOM_DELETE_BY_ID,
} from "../../Constants/endpoints";
import { useNavigate } from "react-router-dom";

function RoomCard(props) {
  const { name, addedUsers, description, _id, ownerId } = props.room;
  const navigate = useNavigate();

  function handleShare() {
    navigate(`/feed/${_id}`);
  }

  async function handleDelete() {
    try {
      const response = await fetch(`${ART_ROOM_DELETE_BY_ID}/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete the room.");
      }
      // Optionally, call a function to refresh the room list after deletion
      props.fetchRooms && props.fetchRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  }

  return (
    <Card className="mb-3" style={{ width: "100%" }}>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {addedUsers ? addedUsers.join(", ") : "No users added"}
        </CardSubtitle>
        <CardText>{description}</CardText>
        <Button onClick={handleShare}>Join Room</Button>
        {props.userId === ownerId?._id && (
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </CardBody>
    </Card>
  );
}

export default RoomCard;