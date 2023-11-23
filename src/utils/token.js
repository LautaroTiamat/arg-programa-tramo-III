const jwt = require('jsonwebtoken');

const JWT_KEY = process.env.JWT_KEY;

const verificarToken = (token) => {
    try {
        let desencriptado = jwt.verify(token, JWT_KEY);

        if (desencriptado) {
            return desencriptado;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

module.exports = {
    verificarToken
}
