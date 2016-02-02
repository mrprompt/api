'use strict';

var router      = require('express').Router();
var path        = require('path');
var controller  = require(path.join(__dirname, '/../controllers/carrinho'));
var carrinho    = require(path.join(__dirname, '/../events/carrinho'));

router.get('/', carrinho, controller.lista);
router.get('/:id', carrinho, controller.abre);
router.post('/', carrinho, controller.adiciona);
router.put('/:id', carrinho, controller.atualiza);
router.delete('/:id', carrinho, controller.apaga);

module.exports = router;