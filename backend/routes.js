var controllers = require("./app/controllers/");

module.exports = function(app) {
  // Home Route
  app.get("/", (req, res) => {
    res.send("Go to todos route");
  });

  // todos Route
  app.get("/todos", controllers.home.view);
  app.get("/todos/:id", controllers.home.one);
  app.post("/todos/add", controllers.home.add);
  app.post("/todos/complete/:id", controllers.home.complete);
  app.post("/todos/edit/:id", controllers.home.update);
  app.get("/todos/delete/:id", controllers.home.delete);
};
