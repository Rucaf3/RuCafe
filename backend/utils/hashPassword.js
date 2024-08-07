const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

module.exports = {
    hashPassword
};
