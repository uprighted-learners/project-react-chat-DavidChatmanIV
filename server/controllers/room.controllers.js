const router = require("express").Router();
const Room = require("../models/room.model");

//Create a new room
router.post("/createRoom", async (req, res) => {
  try {
    const { name, description, addedUsers } = req.body;

    const room = new Room({
      name: name,
      description: description,
      addedUsers: addedUsers,
    });

    const newRoom = await room.save();

    res.json({
      message: "created new room",
      room: newRoom,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// * View all rooms
router.get("/displayAllRooms", async (req, res) => {
  try {
    const rooms = await Room.find();

    res.json({ message: "diplaying all rooms", room: rooms });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Room id
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Deleting room with ID: ${id}`);

    const result = await Room.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.json({
      message: "Room deleted",
      deletedRoom: result,
    });
  } catch (error) {
    console.error(`Error deleting room with ID ${id}:`, error);
    res.status(500).json({ message: error.message });
  }
});

// * Update a room
router.patch("/updateRoom/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const conditions = { _id: id };
    const data = req.body;
    const options = { new: true };

    const room = await Room.findOneAndUpdate(conditions, data, options);

    if (!room) {
      throw new Error("Room was not found");
    }

    res.json({ message: "Room Updated", room: room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Room by Id
router.get("/viewRoomById/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const room = await Room.findById(id).populate("ownerId");

    res.json({ message: "success from get", room: room });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
