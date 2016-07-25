'use strict'

let express = require('express');
let router = express.Router();
let UsuarioController = require('../controllers/Usuario.js');

router.post('/cadastro_pasta', function(req, res, next) {
  UsuarioController.cadastro_pasta(req, res);
});

module.exports = router;
