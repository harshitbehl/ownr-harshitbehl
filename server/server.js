const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// DotEnv Config
dotenv.config({ path: "./config.env" });

// DB Connection
// To be implemented...

// App Listener
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}...`);
});
