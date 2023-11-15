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
UsuariosController.verUsuario = (req, res) => {
    // Ver un usuario en particular
    return res.json({ mensaje: 'Ruta: ver usuario' });
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
UsuariosController.editarUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: editar usuario' });
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
