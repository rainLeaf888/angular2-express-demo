import HeroesRepository = require("../repository/HeroesRepository");
import HeroesModel = require("../model/HeroesModel");

class HeroesService{
  private heroesRepository: HeroesRepository;
  constructor() {
    this.heroesRepository = new HeroesRepository();
  }

  create (item: HeroesModel, callback: (error: any, result: any) => void) {
    this.heroesRepository.create(item, callback);
  }

  retrieve (callback: (error: any, result: any) => void) {
    this.heroesRepository.retrieve(callback);
  }

  update (_id: string, item: HeroesModel, callback: (error: any, result: any) => void) {
    this.heroesRepository.findById(_id, (err, res) => {
      if(err)
       callback(err, res);
      else
        this.heroesRepository.update(res._id, item, callback);

    });
  }

  delete (_id: string, callback:(error: any, result: any) => void) {
    this.heroesRepository.delete(_id , callback);
  }

  findById (_id: string, callback: (error: any, result: HeroesModel) => void) {
    this.heroesRepository.findById(_id, callback);
  }
}
export = HeroesService;