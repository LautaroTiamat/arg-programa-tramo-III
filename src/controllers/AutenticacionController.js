const jwt = require('jsonwebtoken');
const UsuarioModel = require('./../models/mongoose/UsuarioModel.js');

const AutenticacionController = {}

const JWT_KEY = process.env.JWT_KEY;

AutenticacionController.autenticar = async (req, res) => {
    try {
        const { usuario, contrasenia } = req.body;

        const usuarioEncontrado = await UsuarioModel.findOne({
            usuario: usuario,
            contrasenia: contrasenia,
        });

        if (!usuarioEncontrado) {
            return res.status(404).json({ mensaje: 'El usuario no fué encontrado.' });
        }

        const datos = {
            id: usuarioEncontrado._id,
            usuario: usuarioEncontrado.usuario,
            nombres: usuarioEncontrado.nombres,
            apellidos: usuarioEncontrado.apellidos,
        }

        let token = jwt.sign(datos, JWT_KEY, { expiresIn: '1h' });

        res.json({ token: token, datos: datos });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Se produjo un error interno.' });
    }
}

AutenticacionController.registrar = (req, res) => {
    // Simular regitro...
}

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;

    try {
        let desencriptado = jwt.verify(token, JWT_KEY);

        res.json({ datos: desencriptado });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Se ha generado un error',
            error: error,
        });
    }
}

module.exports = AutenticacionController;
