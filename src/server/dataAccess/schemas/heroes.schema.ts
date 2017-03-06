import {Schema} from "mongoose";
import DataAcess = require("../dbAcess");
import HeroesModel = require("../model/HeroesModel");


var mongoose = DataAcess.mongooseInstance;
var mongooseConnection = DataAcess.mongooseConnection;

class HeroesSchema{
  static get schema() {
    var schemas: Schema = mongoose.Schema({
      createAt: Date,
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true
      },
      skill: {
        type: Number,
        required: false,
      },
      updateTime: Date
    });
    schemas.pre('/heroes/save', function(next){
       let now = new Date()
      if(!this.createAt) {
        this.createAt = now;
      }
      if (this.id) {
        this.updateTime = now;
      }
      next();
    });

    return schemas;
  }
}


var schema = mongooseConnection.model<HeroesModel>("Heroes", HeroesSchema.schema);
export = schema;

