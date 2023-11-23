const posteoRouter = require('express').Router();

const {
    verPosteo,
    verPosteos,
    crearPosteo,
    editarPosteo,
    eliminarPosteo,
} = require('./../controllers/mongoose/PosteosController.js');

// Ver publicaciones
posteoRouter.get('/publicaciones', verPosteos);

// Ver publicacion
posteoRouter.get('/publicacion/:id', verPosteo);

// Crear publicacion
posteoRouter.post('/publicacion', crearPosteo);

// Editar publicacion
posteoRouter.put('/publicacion', editarPosteo);

// Eliminar publicacion
posteoRouter.delete('/publicacion', eliminarPosteo);

module.exports = posteoRouter;
