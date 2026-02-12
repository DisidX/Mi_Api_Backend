const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

app.get('/', (req, res ) => {
    
    res.json(
        {
            "message": "Oki, API funcionando"
        }
    );
});


app.listen(PORT,()=>{
    console.log(`Servidor que corre en http://localhost:${PORT}`)
});


console.log("--- INPECCIONANDO APP ---");
console.log(app);