
const Joi = require('joi');

const productoSchema = Joi.object({
    nombre: Joi.string().min(3).max(100).required(),
    precio: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required(),
    descripcion: Joi.string().max(500).optional()
});

const validateProducto = (data) => {
    return productoSchema.validate(data, { abortEarly: false });
};






// conecta request/response + service + Validación
const productoService = require('../services/productoService');

const getProductos = (req, res, next) => {
    try {
        const productos = productoService.getAllProductos();
        res.json({ success: true, data: productos });
    } catch (error) {
        next(error);
    }
};

const getProducto = (req, res, next) => {
    try {
        const producto = productoService.getProductoById(req.params.id);
        if (!producto) {
            const error = new Error('Producto no encontrado');
            error.statusCode = 404;
            throw error;
        }
        res.json({ success: true, data: producto });
    } catch (error) {
        next(error);
    }
};

const createProductoCtrl = (req, res, next) => {
    try {
        const { error } = validateProducto(req.body);
        if (error) {
            const err = new Error(error.details.map(d => d.message).join(', '));
            err.statusCode = 400;
            throw err;
        }

        const nuevo = productoService.createProducto(req.body);
        res.status(201).json({ success: true, data: nuevo });
    } catch (error) {
        next(error);
    }
};

// Implementar update y delete de forma similar...

module.exports = {
    getProductos,
    getProducto,
    createProducto: createProductoCtrl,
    // updateProducto,
    // deleteProducto
};