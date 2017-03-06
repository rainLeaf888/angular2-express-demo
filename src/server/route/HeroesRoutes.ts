import express = require("express");
import HeroesController = require("../controller/HeroesController")
var router = express.Router();

class HeroesRoutes{
  private heroesController: HeroesController;
  constructor() {
    this.heroesController = new HeroesController();
  }

  get routes() {
    router.get('/heroes/list', this.heroesController.getHeroesList);
    router.post("/heroes/save", this.heroesController.create);
    router.get("/heroes/detail/:id", this.heroesController.getHeroesById);
    router.put("/heroes/modify/:id", this.heroesController.update);
    router.delete("/heroes/del/:id", this.heroesController.delHeroesById);
    return router;
  }
}
export = HeroesRoutes;
