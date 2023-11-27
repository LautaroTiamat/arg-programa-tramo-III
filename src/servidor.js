require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const conectarMongo = require('./config/MongooseConfig.js');

const usuarioRouter = require('./routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRoutes.js');
const archivoRouter = require('./routes/archivoRouter.js');
const georefRouter = require('./routes/georefRouter.js');
const posteoRouter = require('./routes/posteoRoutes.js');
const comentarioRouter = require('./routes/comentarioRoutes.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(usuarioRouter);
app.use(autenticacionRouter);
app.use(archivoRouter);
app.use(georefRouter);
app.use(posteoRouter);
app.use(comentarioRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    conectarMongo();
});
