const comentarioRouter = require('express').Router();

const {
    listarComentariosDePosteo,
    crearComentario,
} = require('./../controllers/mongoose/ComentarioController.js');

comentarioRouter.get('/comentarios/:idPosteo', listarComentariosDePosteo);

comentarioRouter.post('/comentarios', crearComentario);

module.exports = comentarioRouter;
