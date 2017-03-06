import HeroesRoutes = require("../route/HeroesRoutes");
import express = require("express");
var app = express();
class Routes{

  constructor() {
  }
  get routes() {
    var routes = new HeroesRoutes().routes;
    app.use("/", routes);
    return app;
  }
}
export = Routes;