const express = require('express');
var cors = require('cors');


class Server {
    
    constructor(){

        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
            some: '/some',
            // some: '/some' 
        };

        // Middlewares
        this.middlewares();
        
        // Rutas de aplicacion
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares(){
        // CORS
        this.app.use(cors());
        
        // Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){

        // this.app.use(this.paths.some, require('../routes/some.routes.js'));
        this.app.use(this.paths.some, require('../routes/some.routes'));
        
    }

    sockets(){
        this.io.on("connection", (socket) => {
            console.log('cliente conectado', socket.id)
            socket.on('disconnect', () => {
                console.log('cliente desconectado', socket.id);
            })
        });
          
    }
    
    listen(){
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;