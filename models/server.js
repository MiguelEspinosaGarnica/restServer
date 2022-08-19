const express = require('express');
const cors = require('cors');

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                
                ok: true,
                msg: 'get API'

            });
          })

          this.app.put('/api', (req, res) => {
            res.json({
                
                ok: true,
                msg: 'put API'

            });
          })

          this.app.post('/api', (req, res) => {
            res.status(201).json({
                
                ok: true,
                msg: 'post API'

            });
          })

          this.app.delete('/api', (req, res) => {
            res.json({
                
                ok: true,
                msg: 'delete API'

            });
          })
    }

    middlewares(){
        //directorio público
        this.app.use(express.static("public"));
        this.app.use(cors())

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto", this.port);
        }
        )
    }


}

module.exports = Server;