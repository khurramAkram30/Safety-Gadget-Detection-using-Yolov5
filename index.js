const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const empRoute = require("./compo/Router/empRouter");

const server = express();
server.use(cors());
server.use(express.json());

server.use(empRoute);
server.get("/", (req, res) => {
  res.send("<h1>Model detection server hosted on heroku</h1>");
});

mongoose
  .connect(
    "mongodb+srv://sapoolybro:r2DWeeL97utVcVYC@rjcheck.ptze7nb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(" connection established ");
  });

server.listen(process.env.PORT || 8000, () => {
  console.log("server has started");
});
