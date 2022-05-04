const Shark = require("../models/sharkModel");

// Get All Sharks | GET Request

const getAllSharks = async (req, res) => {
  try {
    const sharks = await Shark.find();

    res.status(200).json({
      status: "success",
      results: sharks.length,
      data: {
        sharks,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

// Creating New Shark | POST Request

const createShark = async (req, res) => {
  try {
    const newShark = await Shark.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        shark: newShark,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error,
    });
  }
};

module.exports = {
  getAllSharks,
  createShark,
};
