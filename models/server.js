
//imports
const express = require('express');
const cors = require('cors');
const connection = require('../database/connection');


//server
class Server {

 //constructor
 constructor(){

    this.app = express();
    this.port = process.env.PORT;
    this.connectionDb();
    this.middlewares();
    this.routes();

 };


 //connectionDb
 async connectionDb(){

    await connection();

 };


 //middlewares
 middlewares(){

    this.app.use( express.json() );
    this.app.use( cors() );
    this.app.use( express.static('public'));

 };
 
 //router
 routes(){

   this.app.use( require( '../routes/tareas'));

 };


 
 //listen
  listen(){

    this.app.listen(this.port, () => {
        console.log( `Servidor escuchando en el puerto ${ this.port}`)
    });    


  }; 

    
  
 
};

//exports
module.exports = Server;