const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const router = require("../routes/routes");

const app = express();

function configureAndRunServer() {
  dotenv.config();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api", router);

  app.listen(5000, () => console.log("Server Runs."));
}

module.exports = { configureAndRunServer };
