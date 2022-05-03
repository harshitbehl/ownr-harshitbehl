const Cat = require("../models/catModel");
const Shark = require("../models/sharkModel");

// Get Random Animals | GET Request

const getRandomAnimals = async (req, res) => {
  try {
    const cats = await Cat.find();
    const sharks = await Shark.find();

    const mergedAnimals = [...cats, ...sharks];
    const shuffleAnimals = (arr) => {
      let i = arr.length;
      while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
      }
      return arr;
    };
    const randomAnimals = shuffleAnimals(mergedAnimals);

    res.status(200).json({
      status: "success",
      results: randomAnimals.length,
      data: {
        randomAnimals,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

module.exports = { getRandomAnimals };
