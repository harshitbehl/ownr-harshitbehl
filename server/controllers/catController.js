const Cat = require("../models/catModel");

// Get All Cats | GET Request

const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();

    res.status(200).json({
      status: "success",
      results: cats.length,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

// Creating New Cat | POST Request

const createCat = async (req, res) => {
  try {
    const newCat = await Cat.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        cat: newCat,
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
  getAllCats,
  createCat,
};
