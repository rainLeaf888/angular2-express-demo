import BaseRepository = require("./BaseRepository");
import HeroesModel = require("../model/HeroesModel");
import HeroesSchema = require("../schemas/heroes.schema");


class HeroesRepository extends BaseRepository<HeroesModel>{

  constructor() {
    super(HeroesSchema);
  }
}
export = HeroesRepository;