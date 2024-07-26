const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require("./controllers/user.controller");
const roomController = require("./controllers/room.controllers");
const messagesController = require("./controllers/messages.controller");
app.use("/auth", userRoutes);
app.use("/room", roomController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT;
const DBNAME = process.env.DBNAME;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL + DBNAME);
const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to the DB", DBNAME);
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
