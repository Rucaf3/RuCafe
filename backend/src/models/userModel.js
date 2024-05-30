const db = require('../config/database');

const getUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM Usuarios WHERE CorreoElectronico = ?';
    db.query(query, [email], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result[0]);
    });
};

module.exports = {
    getUserByEmail,
};
