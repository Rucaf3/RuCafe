const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const dotenv = require('dotenv');

dotenv.config();

const login = (req, res) => {
    const { email, password } = req.body;

    userModel.getUserByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        bcrypt.compare(password, user.Contraseña, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: 'Server error' });
            }
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.IdUsuario, email: user.CorreoElectronico }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            res.json({ token });
        });
    });
};

module.exports = {
    login,
};
