const ComentarioModel = require('./../../models/mongoose/ComentarioModel.js');

const { verificarToken } = require('./../../utils/token.js');

const ComentariosController = {}

ComentariosController.listarComentariosDePosteo = async (req, res) => {
    try {
        const { idPosteo } = req.params;

        const comentariosEncontrados = await ComentarioModel.find({
            posteo: idPosteo
        }).populate('autor');
        
        return res.json(comentariosEncontrados);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No pudo obtener los comentarios de la publicación.',
            error: error
        });
    }
}

ComentariosController.crearComentario = async (req, res) => {
    try {
        const { descripcion, idPosteo } = req.body;
        const { token } = req.headers;

        const tokenValido = verificarToken(token);

        if (!tokenValido) {
            return res.status(500).json({
                mensaje: 'El token no es válido',
            });
        }

        const autor = tokenValido.id;

        const nuevoComentario = new ComentarioModel({
            descripcion: descripcion,
            autor: autor,
            posteo: idPosteo,
        });

        await nuevoComentario.save();

        return res.json({ mensaje: 'Comentario creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el comentario',
            error: error
        });
    }
}

module.exports = ComentariosController;
