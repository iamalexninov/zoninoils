const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    mongoose.connect("mongodb://localhost:27017/zoninoils");
    console.log("Connect DB");
  } catch (error) {
    console.log("Error, can't run database");
    console.error(error);
  }
}

module.exports = connectDatabase;
