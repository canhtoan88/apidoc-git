const utils = require('../utils');

const AdminSchema = {
    schema: true,
    attributes: {
        type: {
            type: 'string',
            defaultsTo: 'admin'
        },
        username: {
            type: 'string',
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

module.exports = AdminSchema;
