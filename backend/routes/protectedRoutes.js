const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).send({ message: 'Este es un contenido protegido' });
});

module.exports = router;
