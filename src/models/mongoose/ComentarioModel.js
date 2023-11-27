const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
    descripcion: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
    },
    posteo: {
        type: Schema.Types.ObjectId,
        ref: 'posteo',
    }
});

const ComentarioModel = model('comentario', ComentarioSchema);

module.exports = ComentarioModel;
