const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        this.authPath = "/api/auth";
        
        //Conexion a la base de datos
        this.connectDB();
        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    routes() {
        
        this.app.use( this.authPath, require("../routes/auth"));
        this.app.use( this.usuariosPath, require("../routes/user"));
        
        

    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){

        

        //Cors
        this.app.use(cors());
        
        //Lectura y parseo del body

        this.app.use(express.json() );

        //directorio público
    
        this.app.use(express.static("public"));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto", this.port);
        }
        )
    }


}

module.exports = Server;