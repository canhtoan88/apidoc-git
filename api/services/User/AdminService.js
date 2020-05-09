const Utils = require('../../utils');

const AdminService = {
    createAdmin: async (input) => {
        // Check username
        const admin = await Admin.findOne({username: input.username});
        if (admin) {
            return {code: 201, message: 'Username is already exist', data: null};
        }
        Admin.create(input, error => {
            if (error) {
                return {code: 400, message: 'Create fails', error: error};
            }
        });

        return {code: 200, message: 'Created Admin account', data: `A new admin account named ${input.username}`};
    },
    loginAdmin: async (input) => {
        const admin = await Admin.findOne({username: input.username});
        if (!admin) {
            return {code: 201, message: 'Username is not match', data: null};
        }

        // Check type of admin account
        if (admin.type !== 'admin') {
            return {code: 202, message: 'Current account is not admin account', data: null};
        }

        // Compare password
        if (!Utils.comparePass(input.password, admin.password)) {
            return {code: 201, message: 'Username or Password is incorrect', data: null};
        }

        // Encrypt data --> create token
        const token = Utils.encrypt({id: admin.id}, '1 min');
        return {code: 200, message: 'Login successfully', data: {username: input.username, token: token}};
    }
};

module.exports = AdminService;
