const bcrypt    = require('bcryptjs');
const saltRound = sails.config.saltRound;
const salt      = bcrypt.genSaltSync(parseInt(saltRound));

module.exports = {
    hashPass: (password) => {
        return bcrypt.hashSync(password, salt);
    },
    comparePass: (password, hashPassword) => {
        return bcrypt.compareSync(password, hashPassword);
    }
}