const express = require('express');
var cors = require('cors');

class Server {
    
    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            // somePath: '/somethingPath' 
        };

        // Middlewares
        this.middlewares();
        
        // Rutas de aplicacion
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());
        
        // Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){

        // this.app.use(this.paths.some, require('../routes/some.routes'));
        
    }
    
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;