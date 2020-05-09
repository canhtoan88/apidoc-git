const utils = require('../utils');

const UserSchema = {
    attributes: {
        fullname: {
            type: 'string',
            minLength: 3,
            maxLength: 50,
            required: true
        },
        username: {
            type: 'string',
            minLength: 3,
            maxLength: 64,
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            minLength: 3,
            maxLength: 128,
            required: true
        }
    },

    beforeCreate(value, next) {
        value.password = utils.hashPass(value.password);
        next();
    }
};

module.exports = UserSchema;
