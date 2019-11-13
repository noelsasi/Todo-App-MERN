const express = require("express");
const config = require("./config");
const glob = require("glob");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(config.db);
const db = mongoose.connection;
db.on("error", () => {
  throw new Error("unable to connect to database at " + config.db);
});

const models = glob.sync(config.root + "/app/models/*.js");
models.forEach(function(model) {
  require(model);
});
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// module.exports = require("./config/express")(app, config);
require("./routes")(app);

app.listen(config.port, () => {
  console.log("Express server listening on port " + config.port);
});
