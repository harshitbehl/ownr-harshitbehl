const mongoose = require("mongoose");

// Shark Schema

const sharkSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: [true, "Photo URL is required!"],
      unique: true,
    },
  },
  { timestamps: true }
);

// Shark Model
const Shark = mongoose.model("Shark", sharkSchema);

module.exports = Shark;
