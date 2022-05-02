const express = require("express");
const cors = require("cors");
const app = express();

// Enable Cors
app.use(cors({ origin: "*" }));

// Middleware JSON body parser
app.use(express.json());

// Routes
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Test Successful!",
  });
});

// App Export
module.exports = app;
