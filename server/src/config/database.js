const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/");
    console.log("Connect DB");
  } catch (error) {
    console.log("Error, can't run database");
    console.error(error);
  }
}

module.exports = connectDatabase;
