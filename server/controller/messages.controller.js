const router = require("express").Router();
const messages = require("../models/messages.model");

// display all messages within a room endpoint
router.get("/displayMessages", async (req, res) => {
  const { messageId } = req.params;

  try {
    // Assuming 'Message' is your Mongoose model for messages
    const displayMessages = await messages.find({ messageId });
    res.json(displayMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// create a message within a room endpoint
router.post("/createMessages", async (req, res) => {
  try {
    // const { roomId } = req.params;
    // const { messageId } = req.params;
    const { body, when } = req.body;

    // Create new message
    const newMessage = new messages({
      when: when,
      // user: user,
      // roomId: roomId,
      body: body,
    });

    // Save message to database
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//update a message within a room endpoint
router.patch("/updateMessages/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const conditions = { _id: id };
    const data = req.body;
    const options = { new: true };

    const updateMessages = await messages.findOneAndUpdate(
      conditions,
      data,
      options
    );

    if (!updateMessages) {
      throw new Error("Messages was not found");
    }

    res.json({ message: "Messages Updated", messages: messages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a message within a room endpoint
router.delete("/deleteMessages/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const conditions = { _id: id };

    console.log(`Deleting messages with ID: ${id}`);

    // Delete message
    const deleteMessages = await messages.findByIdAndDelete(conditions);

    if (!deleteMessages) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({
      messages: `Message with id deleted successfully.`,
    });
  } catch (error) {
    console.error(`Error deleting message with ID:`, error);
    res.status(500).json({ messages: "Server Error" });
  }
});

module.exports = router;
