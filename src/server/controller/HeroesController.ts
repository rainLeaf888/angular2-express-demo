import express = require("express");
import HeroesService = require("../dataAccess/service/HeroesService");
import HeroesModel = require("../dataAccess/model/HeroesModel");


class HeroesController{

  constructor() {
  }
  create(req: express.Request, res: express.Response): void {
    var heroes:HeroesModel = <HeroesModel>req.body;
    var heroesService = new HeroesService();
    try{
      heroesService.create(heroes, (error, result)=>{
        if(error) {
          res.send({
            flag: 0,
             message: error
          })
        } else {
          res.send({
            flag: 1,
            message: error,
            data: result
          })
        }
      });
    }catch(e) {
      console.log(e);
      res.send({
        flag: 0,
        message: e
      })
    }

  }

  update(req: express.Request, res: express.Response):void {
    var id: string = req.params["id"];
    var heroes: HeroesModel = <HeroesModel>req.body;
    var heroesService = new HeroesService();
    try{
      heroesService.update(id, heroes, (error, result)=>{
        if(error) {
          res.send({
            flag: 0,
             message: error
          })
        } else {
          res.send({
            flag: 1,
            message: error,
            data: result
          })
        }
      });
    }catch(e) {
      console.log(e);
      res.send({
        flag: 1,
        message: e
      })
    }
  }

  getHeroesById(req: express.Request, res: express.Response): void {
    var id: string = req.params["id"];
    var heroesService = new HeroesService();
    try{
      heroesService.findById(id, (error, result)=>{
        if(error) {
          res.send({
            flag: 0,
             message: error
          })
        } else {
          res.send({
            flag: 1,
            message: error,
            data: result
          })
        }
      });
    }catch(e) {
      console.log(e);
      res.send({
        flag: 1,
        message: e
      })
    }
  }

  getHeroesList(req: express.Request, res: express.Response): void {
    var heroesService = new HeroesService();
    try{
      heroesService.retrieve((error, result)=>{
        if(error) {
          res.send({
            flag: 0,
             message: error
          })
        } else {
          res.send({
            flag: 1,
            message: error,
            data: result
          })
        }
      });
    }catch(e) {
      console.log(e);
      res.send({
        flag: 1,
        message: e
      })
    }
  }

  delHeroesById(req: express.Request, res: express.Response):void {
    var id: string = req.params["id"];
    var heroesService = new HeroesService();
    try{
      heroesService.delete(id, (error, result)=>{
        if(error) {
          res.send({
            flag: 0,
             message: error
          })
        } else {
          res.send({
            flag: 1,
            message: error,
            data: result
          })
        }
      });
    }catch(e) {
      console.log(e);
      res.send({
        flag: 1,
        message: e
      })
    }
  }
}

export = HeroesController;