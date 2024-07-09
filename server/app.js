require("dotenv").config();
const express = require("express");
const app = express();
const messagesController = require("./controller/messages.controller");
// const roomController = require("./controller/room.controller");
// const userController = require("./controller/user.controller");

const mongoose = require("mongoose");

const PORT = process.env.PORT;
const DBNAME = process.env.DBNAME;
const DB_URL = process.env.DB_URL;
// const cors = require("cors");

mongoose.connect(DB_URL + DBNAME);
const db = mongoose.connection;
db.once("open", () => {
    console.log("connected to the DB", DBNAME);
});

// app.use(cors({
//     origin: '*',
// }));

app.use(express.json());

app.use("/messages", messagesController);

// app.use("/room", roomController);

// app.use("/user", userController);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

