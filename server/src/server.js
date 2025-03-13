const { configureAndRunServer } = require("./config/express");
const connectDB = require("./config/database");

function start() {
  configureAndRunServer();
  connectDB();
}

start();
