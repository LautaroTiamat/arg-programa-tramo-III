require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

/*const { database } = require('./config/SequelizeConfig.js');
const conectarMongo = require('./config/MongooseConfig.js');

const usuarioRouter = require('./routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRoutes.js');
const archivoRouter = require('./routes/archivoRouter.js');
const georefRouter = require('./routes/georefRouter.js');*/

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
//app.use(usuarioRouter);
//app.use(autenticacionRouter);
//app.use(archivoRouter);
//app.use(georefRouter);

app.get('/', (req, res) => {
    return res.json({ mensaje: 'El archivo se subió correctamente' });
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    //database();
    //conectarMongo();
});

module.exports = app;
