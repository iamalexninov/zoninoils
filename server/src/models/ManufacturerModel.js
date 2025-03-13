const mongoose = require("mongoose");

const manufactorerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  logo: {
    type: String,
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  country: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  // creator: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

const Manufactorer = mongoose.model("Manufactorer", manufactorerSchema);

module.exports = Manufactorer;
