require('dotenv').config();
const app = require('.src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server runnnig on port ${PORT} in ${process.env.NODE_ENV} mode`);
} );