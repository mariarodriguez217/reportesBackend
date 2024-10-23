// Importar Express
const express = require('express');

// Inicializar la aplicación Express
const app = express();
app.use(express.json());

// Definir el puerto para el servidor
const PORT = 3000;

//Routes
const authRoutes = require('./routes/auth');
app.use(require('./routes/index'));
app.use('/auth', authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});