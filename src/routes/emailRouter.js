const emailRouter = require('express').Router();
const {
    enviarEmail,
} = require('./../controllers/EmailController.js');

emailRouter.post('/enviarEmail', enviarEmail);

module.exports = emailRouter;
