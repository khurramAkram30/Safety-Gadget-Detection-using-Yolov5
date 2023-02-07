const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const empRoute = require("./compo/Router/empRouter");

const server = express();
server.use(cors());
server.use(express.json());

server.use(empRoute);

mongoose
  .connect(
    "mongodb://user:user123@ac-quv8oxc-shard-00-00.fdc6ocf.mongodb.net:27017,ac-quv8oxc-shard-00-01.fdc6ocf.mongodb.net:27017,ac-quv8oxc-shard-00-02.fdc6ocf.mongodb.net:27017/?ssl=true&replicaSet=atlas-c8l04u-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(" connection established ");
  });

server.listen(process.env.PORT || 8000, () => {
  console.log("server has started");
});
