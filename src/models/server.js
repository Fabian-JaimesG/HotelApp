const exp = require("constants");
const cors = require("cors");
const express = require("express");
const app = express();
//const dbConnection = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      users: "/users",
      welcome: "/api/welcome",
    };

    //Conectar a base de datos
    //this.conectarDB();

    //Middlewares
    this.middlewares();
    //Rutas de la app
    this.routes();
  }

  //   async conectarDB() {
  //     await dbConnection();
  //   }

  middlewares() {
    //cors
    this.app.use(cors());

    this.app.use(express.json());

    /*
    permite que tu aplicación Express.js pueda entender los datos de los formularios HTML 
    que se envían como application/x-www-form-urlencoded, y los convierte en un objeto JavaScript
     accesible a través de req.body en tus rutas y middlewares.
    */
    this.app.use(express.urlencoded({ extended: false }));

    //Dir Public
    //this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.paths.users, require("../routes/users"));
    this.app.use(this.paths.welcome, require("../routes/index"));
    // this.app.use(this.paths.hotel, require("../routes/hotel"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}.`);
    });
  }
}

module.exports = Server;
