const mongoose = require("mongoose");

// message schema referencing User and Room Ids

const MessagesSchema = new mongoose.Schema(
  {
    when: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  //   user: {
  //     type: mongoose.Types.ObjectId,
  //     required: true,
  //       ref: "user",
  //   },
  //   roomId: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "room",
  //   },
  },
  { when: true }
);


module.exports = mongoose.model("Messages", MessagesSchema);