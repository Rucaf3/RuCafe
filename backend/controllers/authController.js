// authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const login = async (req, res) => {
  const { email, password } = req.body;

  // Consulta a la base de datos para encontrar el usuario por email
  const query = 'SELECT * FROM Usuarios WHERE CorreoElectronico = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.Contraseña);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generar un token JWT
    const token = jwt.sign({ userId: user.IdUsuario, email: user.CorreoElectronico }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Enviar el token al cliente
    res.json({ token });
  });
};

module.exports = {
  login,
};
