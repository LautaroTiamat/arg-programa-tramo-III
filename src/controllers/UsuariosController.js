const UsuarioModel = require('./../models/UsuarioModel.js');

const UsuariosController = {}

// Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModel.findAll();

        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver usuario
UsuariosController.verUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuarioEncontrado = await UsuarioModel.findByPk(id);

        if (usuarioEncontrado) {
            return res.json(usuarioEncontrado);
        } else {
            return res.status(500).json({
                error: 'No se encontró el usuario.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Crear usuario
UsuariosController.crearUsuario = async (req, res) => {
    try {
        const { nombres, apellidos } = req.body;

        const nuevoUsuario = await UsuarioModel.create({
            nombres: nombres,
            apellidos: apellidos,
        });

        if (nuevoUsuario) {
            return res.json({ mensaje: 'Usuario creado correctamente.' });
        } else {
            return res.status(500).json({
                error: 'No se pudo crear el usuario.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Editar usuario
UsuariosController.editarUsuario = async (req, res) => {
    try {
        const { id, nombres, apellidos } = req.body;

        if (!id || !nombres || !apellidos) {
            return res.status(500).json({
                error: 'Faltan campos.'
            });
        }

        const usuarioEditado = await UsuarioModel.update(
            {
                nombres: nombres,
                apellidos: apellidos,
            }, {
                where: {
                    id: id,
                }
            }
        );

        if (usuarioEditado) {
            return res.json({ mensaje: 'Usuario editado correctamente.' });
        } else {
            return res.status(500).json({
                error: 'No se pudo editar el usuario.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Eliminar usuario
UsuariosController.eliminarUsuario = async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.body;

        const eliminado = await UsuarioModel.destroy({ where: { id: id } });

        if (eliminado) {
            return res.json({ mensaje: 'Usuario eliminado correctamente.' });
        } else {
            return res.status(500).json({
                mensaje: 'No se pudo eliminar el usuario.',
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

module.exports = UsuariosController;
