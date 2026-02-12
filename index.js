const express = require("express");
const app = express();
const fs = require("fs"); // File System Reader 
const PORT = 3000;


app.use(express.json());

const DATA_FILE = './productos.json';

app.get('/productos',(req,res)=>{
    const data = fs.readFileSync('DATA_FILE','utf-8');
    const productos =  JSON.parse(data);
    res.json(productos)
})

app.post('/productos', (req, res)=>{
    const nuevoProducto = req.body;

    const data = fs.readFileSync('DATA_FILE','utf-8');
    const productos = JSON.parse(data);
    
    productos.push(nuevoProducto);
    fs.writeFileSync(DATA_FILE,JSON.stringify(productos,null,2));
    res.status(201).json({mensaje: "Producto creado!",producto: nuevoProducto});
});




app.listen(PORT,()=>{
    console.log(`Servidor que corre en http://localhost:${PORT}`)
});


