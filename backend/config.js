const path = require("path");
const rootPath = path.normalize(__dirname + "/.");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "MERN-TODO"
    },
    port: process.env.PORT || 5000,
    db: "mongodb://localhost:27017/todos"
  },

  test: {
    root: rootPath,
    app: {
      name: "MERN-TODO"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/todos"
  },

  production: {
    root: rootPath,
    app: {
      name: "MERN-TODO"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/todos"
  }
};

module.exports = config[env];
