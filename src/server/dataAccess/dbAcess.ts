import Mongoose = require("mongoose"); // package.json 中需要引入@type/mongoose 或 typings install dt-express (但目前本引用不可用)
const DB_URL : string = "mongodb://127.0.0.1:27017/quickStart";

class DataAcess{
  static mongooseInstance : any;
  static mongooseConnection : Mongoose.Connection;
  constructor(argument) {
    DataAcess.getConnection();
  }


  static getConnection(): Mongoose.Connection {
    if(this.mongooseInstance) return this.mongooseInstance;
    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once("open", ()=>{
      console.log("Connected to mongodb");
    });
    this.mongooseInstance = Mongoose.connect(DB_URL);
    return this.mongooseInstance;
  }
}
DataAcess.getConnection();

export = DataAcess;