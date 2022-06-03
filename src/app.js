import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
  constructor(){
    this.server = express();
    this.database();
    this.middleware();
    this.routes();
  }
  middleware(){
    this.server.use(express.json());

  } 
  database(){
    mongoose.connect(`mongodb+srv://api-nodejs-user:pgXZ5S729j7tu7nj@api-nodejs.7oneo.mongodb.net/?retryWrites=true&w=majority`,
    {useNewUrlParser:true, useUnifiedTopology: true}
    );
  }
  routes(){
  this.server.use(routes);  

  }
}

export default new App().server;