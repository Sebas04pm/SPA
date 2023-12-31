const express = require('express');  //server
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser');
const morgan = require('morgan'); //middlewere
const routes = require('./routes/index');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {   //esto me permite hacer peticiones del tipo gest, post, put y delete
    res.header('Access-Control-Allow-Origin', '*'); //  Actualizar para que coincida con el dominio desde el que realizará la solicitud
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use(fileUpload())
server.use('/', routes);


// Error al detectar el endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;