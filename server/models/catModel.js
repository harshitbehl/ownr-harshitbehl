const mongoose = require("mongoose");

// Cat Schema

const catSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: [true, "Photo URL is required!"],
      unique: true,
    },
  },
  { timestamps: true }
);

// Model
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
