require("dotenv").config();
const express = require("express");
const app = express();
const roomController = require("./controllers/room.controllers");

const mongoose = require("mongoose");

const PORT = process.env.PORT;
const DBNAME = process.env.DBNAME;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL + DBNAME);
const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to the DB", DBNAME);
});

app.use(express.json());

app.use("/room", roomController);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
