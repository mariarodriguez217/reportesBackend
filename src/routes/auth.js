const express = require('express');
const router = express.Router();

// Simulación de usuarios en memoria
const users = [
  { username: 'admin', password: 'password123' },
  { username: 'user', password: '12345' }
];

// Ruta de login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validar credenciales
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ message: 'Login exitoso', user });
  } else {
    return res.status(400).json({ message: 'Usuario o contraseña incorrectos' });
  }
});

module.exports = router;