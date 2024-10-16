// Importar Express
const express = require('express');

// Inicializar la aplicación Express
const app = express();

// Definir el puerto para el servidor
const PORT = 3000;

// Ruta principal
//app.get('/', (req, res) => {
  //  res.send('¡Hola Mundo con Node.js y Express!');
//});
//Routes
app.use(require('./routes/index'));
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});