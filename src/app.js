const express = require('express');
const errorHandler = require('src/middleware/errorHandler');
const productRoutes =  require('src/routes/productRoutes');


const app = express();

app.use(express.json());

app.use('/productos.json', productRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Not found'
    });
    res.status(500).json({
        message: 'Internal server error'
    });
});

app.use(errorHandler);

module.exports = app;