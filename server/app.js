const express = require("express");
const cors = require("cors");
const app = express();

// Router Imports
const animalRouter = require("./routes/animalRoutes");

// Enable CORS
app.use(cors({ origin: "*" }));

// Middleware JSON body parser
app.use(express.json());

// Routes
app.use("/api/v1/animals", animalRouter);

// Unhandled Routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// App Export
module.exports = app;
