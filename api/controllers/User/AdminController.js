const AdminService = require('../../services/User/AdminService');
const AdminController = {
    /**
    @api {post} /api/admin 01. Create a new adminitrator account
    @apiName Create Admin
    @apiDecription Author: CanhToan - Create Admin
    @apiVersion 1.0.1
    @apiGroup Admin

    @apiHeader {String} token Token is requied

    @apiParams {String} username The username is required
    @apiParams {String} password The password is required

    @apiSuccessExample Success-Response
    HTTP/1.1 200 OK
    {
        "code": 200,
        "message": "Created Admin account",
        "data": "A new admin account named admin"
    }

    @apiErrorExample Error-Response
    HTTP/1.1 400 Bad request
    {
        "code": 400,
        message: "Token is required",
        "error": "Token is required"
    }
    */
    createAdmin: async (req, res) => {
        const {username, password} = req.allParams();

        // Check params
        if (!username || !password) {
            return res.badRequest({code: 202, message: 'username and password are required'});
        }
        // Add new admin account to db
        const result = await AdminService.createAdmin({username, password});
        return res.ok(result);
    },
    /**
    @api {post} /api/admin 02. Admin login
    @apiName Admin login
    @apiDecription Author: CanhToan - Admin login
    @apiVersion 1.0.1
    @apiGroup Admin

    @apiParams {String} username The username is required
    @apiParams {String} password The password is required

    @apiSuccessExample Success-Response
    HTTP/1.1 200 OK
    {
        "code": 200,
        "message": "Login successfully",
        "data": {
            "username": "admin",
            "token": "tokenishere"
        }
    }

    @apiErrorExample Error-Response
    HTTP/1.1 400 Bad request
    {
        "code": 201,
        message: "Username is not match",
        "data": null
    }
    {
        "code": 202,
        message: "Current account is not admin account",
        "data": null
    }
    {
        "code": 201,
        message: "Username or Password is incorrect",
        "data": null
    }
    */
    loginAdmin: async (req, res) => {
        const params = req.allParams();

        // Check params
        if (!params.username || !params.password) {
            return res.badRequest({code: 202, message: 'username and password are required'});
        }

        const result = await AdminService.loginAdmin(params);
        return res.ok(result);
    }
};

module.exports = AdminController;
