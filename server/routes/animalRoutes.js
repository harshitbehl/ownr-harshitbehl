const express = require("express");
const { getAllCats, createCat } = require("../controllers/catController");
const { getAllSharks, createShark } = require("../controllers/sharkController");
const { getRandomAnimals } = require("../controllers/animalController");
const router = express.Router();

router.route("/cats").get(getAllCats).post(createCat);
router.route("/sharks").get(getAllSharks).post(createShark);
router.route("/random-animals").get(getRandomAnimals);

module.exports = router;
