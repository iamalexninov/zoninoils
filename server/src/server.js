const { configureAndRunServer } = require("./config/express");
const database = require("./config/database");

function start() {
  configureAndRunServer();
  //runDatabase();
}

start();
