import mongoose = require("mongoose");

interface HeroesModel extends mongoose.Document{
  id: number;
  name: string;
  skill: number;
}
export = HeroesModel;