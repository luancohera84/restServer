const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        // Inicializamos el servidor de express
        this.app = express();

        // Declaramos el puerto de salida de nuestro servidor 
        this.port = process.env.PORT;

        // Declaración de path - rutas
        this.usuariosPath = '/api/usuarios';

        // Middlewares 
        this.middlewares();

        // Inicializamos las rutas
        this.routes();
    };

    middlewares(){

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static( 'public' ) );
    };

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    };

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor correindo en el puerto', this.port );
        });
    };
}

module.exports = Server;