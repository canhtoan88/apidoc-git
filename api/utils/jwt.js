const jwt = require('jsonwebtoken');
const secret = sails.config.secret;

module.exports = {
    encrypt: (data, expiresIn = '10 day') => {
        return jwt.sign(data, secret, {expiresIn: expiresIn});
    },
    decrypt: (token) => {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            return {code: 202, message: 'Token error: ' + error};
        }
    },
    destroy: (token) => {
        return jwt.destroy(token);
    }
};
