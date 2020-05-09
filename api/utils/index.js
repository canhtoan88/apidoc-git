const auth = require('./auth');
const bcrypt = require('./bcrypt');
const jwt = require('./jwt');

const utils = {
    auth:           auth,
    decrypt:        jwt.decrypt,
    encrypt:        jwt.encrypt,
    destroy:        jwt.destroy,
    hashPass:       bcrypt.hashPass,
    comparePass:    bcrypt.comparePass
};

module.exports = utils;
