const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    // mongoose.connect
    console.log("Database Connected!");
  } catch (error) {
    console.log("Error, can't run database");
    console.error(error);
  }
}
