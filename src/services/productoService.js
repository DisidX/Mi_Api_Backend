
let productos = require('../../productos.json'); // temporal

const getAllProductos = () => productos;

const getProductoById = (id) => {
    return productos.find(p => p.id === parseInt(id));
};

const createProducto = (nuevoProducto) => {
    const id = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const producto = { id, ...nuevoProducto };
    productos.push(producto);
    return producto;
};

const updateProducto = (id, datosActualizados) => {
    const index = productos.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;

    productos[index] = { ...productos[index], ...datosActualizados };
    return productos[index];
};

const deleteProducto = (id) => {
    const index = productos.findIndex(p => p.id === parseInt(id));
    if (index === -1) return false;
    productos.splice(index, 1);
    return true;
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};