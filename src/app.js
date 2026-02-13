const express = require('express');
const productoRoutes =  require('./routes/productoRoutes');
const errorHandler = require('./middleware/errorHandler');


const app = express();

app.use(express.json());

app.use('/productos.json', productoRoutes);

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