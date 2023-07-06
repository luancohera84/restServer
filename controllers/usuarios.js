const { response, request } = require('express');


// Declaración de funciones

const usuariosGet = ( req = request, res = response ) => {

    const { q, nombre = 'No nombre', apiKey, page = 1, limit } = req.query; 

    res.status(201).json({
        sms: 'Todo very fail',
        peticion: 'get - controllers',
        q, 
        nombre,
        apiKey,
        page,
        limit
    });
};

const usuariosPost = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        sms: 'Todo very fail',
        peticion: 'post - controllers',
        nombre,
        edad
    });
};


const usuariosPut = ( req, res = response ) => {
    const { id, token } = req.params;

    res.status(201).json({
        sms: 'Todo very fail',
        peticion: 'put - controllers',
        id,
        token
    });
};


const usuariosDelete = ( req, res = response ) => {
    res.status(201).json({
        sms: 'Todo very fail',
        peticion: 'delete - controllers'
    });
};


const usuariosPatch = ( req, res = response ) => {
    res.status(201).json({
        sms: 'Todo very fail',
        peticion: 'patch - controllers'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}