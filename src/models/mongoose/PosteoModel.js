const { Schema, model } = require('mongoose');

const PosteoSchema = new Schema({
    titulo: String,
    descripcion: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
    },
});

const PosteoModel = model('posteo', PosteoSchema);

module.exports = PosteoModel;
