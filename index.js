const express = require("express");
const app = express();
const fs = require("fs"); // File System Reader
const PORT = 3000;

app.use(express.json());

const DATA_FILE = "./productos.json";

app.get("/productos", (req, res) => {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    const productos = JSON.parse(data);
    res.json(productos);
});

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Mi API de Productos</title>
                <style>
                    body { font-family: sans-serif; padding: 20px; }
                    form { margin-bottom: 20px; border: 1px solid #ccc; padding: 15px; border-radius: 8px; }
                    input { margin: 5px; padding: 8px; }
                    button { padding: 8px 15px; background: #007bff; color: white; border: none; cursor: pointer; }
                </style>
            </head>
            <body>
                <h1>Gestión de Productos</h1>
                
                <form id="productoForm">
                    <input type="text" id="nombre" placeholder="Nombre del producto" required>
                    <input type="number" id="precio" placeholder="Precio" required>
                    <button type="submit">Guardar Producto</button>
                </form>

                <h2>Lista de Productos</h2>
                <div id="lista"></div>

                <script>
                    const form = document.getElementById('productoForm');
                    
                    // Función para cargar y mostrar productos
                    async function cargarProductos() {
                        const res = await fetch('/productos');
                        const productos = await res.json();
                        const listaDiv = document.getElementById('lista');
                        listaDiv.innerHTML = productos.map(p => 
                            \`<p><strong>ID: \${p.id}</strong> - \${p.nombre} (\$\${p.precio})</p>\`
                        ).join('');
                    }

                    // Enviar producto al servidor
                    form.onsubmit = async (e) => {
                        e.preventDefault();
                        const nombre = document.getElementById('nombre').value;
                        const precio = document.getElementById('precio').value;

                        await fetch('/productos', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ nombre, precio })
                        });

                        form.reset();
                        cargarProductos(); // Recargar la lista para ver el nuevo ID
                    };

                    cargarProductos(); // Cargar al abrir la página
                </script>
            </body>
        </html>`);
});

app.post("/productos", (req, res) => {
    const nuevoProducto = req.body;

    nuevoProducto.id = Date.now();

    const data = fs.readFileSync(DATA_FILE, "utf-8");
    const productos = JSON.parse(data);

    productos.push(nuevoProducto);
    fs.writeFileSync(DATA_FILE, JSON.stringify(productos, null, 2));
    res
        .status(201)
        .json({ mensaje: "Producto creado!", producto: nuevoProducto });
});

app.listen(PORT, () => {
    console.log(`Servidor que corre en http://localhost:${PORT}`);
});
