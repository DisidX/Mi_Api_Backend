
const express = require('express');
const productoController = require('../controllers/productoController');

const router = express.Router();

router.get('/', productoController.getProductos);
router.get('/:id', productoController.getProducto);
router.post('/', productoController.createProducto);
// router.put('/:id', ...)
// router.delete('/:id', ...)

module.exports = router;