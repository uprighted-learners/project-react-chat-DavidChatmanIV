const router = require("express").Router();
const Messages = require("../models/messages.model");

// display all messages within a room endpoint
router.get("/displayMessages", async (req, res) => {
  const { roomId } = req.params;

  try {
    // Assuming 'Message' is your Mongoose model for messages
    const messages = await Message.find({ roomId });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// create a message within a room endpoint
router.post("/createMessages", async (req, res) => {
  try {
    const { roomId } = req.params;
    const { user, body, when } = req.body;

    // Create new message
    const newMessage = new Messages({
      when: when,
      user: user,
      roomId: roomId,
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

//update a messagew within a room endpoint
router.patch("/updateMessages", async (req, res) => {
  const { roomId, messageId } = req.params;
  const { body, when } = req.body;

  try {
    // Update message
    const updatedMessages = await Message.findByIdAndUpdate(
      messageId,
      { body, when },
      { new: true }
    );

    if (!updatedMessages) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json(updatedMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// delete a message within a room endpoint
router.delete("/deleteMessages", async (req, res) => {
  const { roomId, messageId } = req.params;

  try {
    // Delete message
    const deletedMessages = await Message.findByIdAndDelete(messageId);

    if (!deletedMessages) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({
      messages: `Message with id '${messageId}' deleted successfully.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ messages: "Server Error" });
  }
});

module.exports = router;
