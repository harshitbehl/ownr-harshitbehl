const express = require("express");
const cors = require("cors");
const app = express();

// Router Imports
const sharkRouter = require("./routes/sharkRoutes");
const catRouter = require("./routes/catRoutes");

// Enable Cors
app.use(cors({ origin: "*" }));

// Middleware JSON body parser
app.use(express.json());

// Routes
app.use("/api/v1/sharks", sharkRouter);
app.use("/api/v1/cats", catRouter);

// App Export
module.exports = app;
