const UserService = require('../../services/User/UserService');

const UserController = {
    /**
        @api {get} /user 01. Get users
        @apiName getUsers
        @apiDescription Author: Canh Toan - Getting list users
        @apiVersion 1.0.1
        @apiGroup User

        @apiHeader {String} token Token is required
        @apiHeaderExample {json} Header-Example
        {
            "token": "thisistoken"
        }

        @apiSuccessExample Success-Response
        HTTP/1.1 200 ok
        {
            "code": 200,
            "message": "ok",
            "data": [
                {
                    "fullname": "Nguyen Canh Toan",
                    "username": "canhtoan88"
                },
                {
                    "fullname": "Nguyen Thi Tu Quyen",
                    "username": "tuquyenct"
                }
            ]
        }

        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            "Error": "Token is required"
        }
        {
            "Error": "Token invalid"
        }
        @apiErrorExample Error-Response
        HTTP/1.1 500 error
        {
            "Error": "Internal Server Error"
        }
     */
    getListUsers: async (req, res) => {
        const token = req.headers.token;
        if (!token) {
            return res.badRequest({Error: 'token is required'});
        }
        // With server
        // sails.config.custom.users.map(value => {return {fullname: value.fullname, username: value.username};})
        const users = await User.find();
        return res.ok({
            code: 200,
            message: 'ok',
            total: users.length,
            data: users
        });
    },
    /**
        @api {post} /user 02. Post user
        @apiName postUser
        @apiDescription Author: Canh Toan - Posting user
        @apiVersion 1.0.1
        @apiGroup User

        @apiParam {String} fullname Fullname is required
        @apiParam {String} username Username is required
        @apiParam {String} password Password is required
        @apiParamExample {json} Param-Example
        {
            "fullname": "Nguyen Canh Toan",
            "username": "canhtoan88",
            "password": "123"
        }
        @apiParamExample {json} Param-Example 2
        {
            "fullname": "Nguyen Thi Tu Quyen",
            "username": "tuquyenct",
            "password": "321"
        }

        @apiSuccessExample Success-Response
        HTTP/1.1 200 ok
        {
            "fullname": "Nguyen Canh Toan",
            "username": "canhtoan88"
        }

        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            "Error": "fullname is required"
        }
        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            "Error": "username is required"
        }
        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            "Error": "password is required"
        }
     */
    createUser: async (req, res) => {
        const {fullname, username, password} = req.body;
        if (!fullname) {
            return res.badRequest({Error: 'fullname is required'});
        }
        if (!username) {
            return res.badRequest({Error: 'username is required'});
        }
        if (!password) {
            return res.badRequest({Error: 'password is required'});
        }

        const result = await UserService.createUser({fullname, username, password});
        return res.ok(result);
    },
    /**
        @api {put} /user 03. Put user
        @apiName putUser
        @apiDescription Author: Canh Toan - Puting user
        @apiVersion 1.0.1
        @apiGroup User

        @apiParamExample {json} Param-Example
        {
            "username": "canhtoan88",
            "password": "123"
        }

        @apiSuccessExample Success-Response
        HTTP/1.1 200 ok
        {
            "code": 200,
            "message": "ok",
            "data": {
                "fullname": "Nguyen Canh Toan",
                "username": "canhtoan88"
            }
        }

        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            "Error": "username is required"
        }
        {
            "Error": "password is required"
        }
        @apiErrorExample Error-Response
        HTTP/1.1 201 error
        {
            "code": 201,
            "message": "username is not match with any account",
            "data", null
        }
        {
            "code": 201,
            "message": "password is incorrect",
            "data", null
        }
     */
    login: async (req, res) => {
        const {username, password} = req.body;
        if (!username) {
            return res.badRequest({Error: 'username is required'});
        }
        if (!password) {
            return res.badRequest({Error: 'password is required'});
        }
        const result = await UserService.login({username, password});
        res.ok(result);
    },
    /**
        @api {delete} /user 04. Delete user
        @apiName deleteUser
        @apiDescription Author: Canh Toan - Deleting user by username
        @apiVersion 1.0.1
        @apiGroup User

        @apiHeader {String} token Token is required

        @apiParam {Array} id id is an array. Required if no username
        @apiParam {Array} username username is an array. Required if no id

        @apiParamExample {json} Param-Example
        {
            "username": ["canhtoan88"],
            "id": ["5ea7f268864a0a14a027cc21"]
        }

        @apiSuccessExample Succes-Response
        HTTP/1.1 200 ok
        {
            "code": 200,
            "message": "Deleted 2 account(s)",
            "data": ['canhtoan12', 'canhtoan21']
        }

        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            "Error": "username is required"
        }
        @apiErrorExample Error-Response
        HTTP/1.1 201 error
        {
            "code": 201,
            "message": "username is not match with any account"
        }
     */
    deleteUser: async (req, res) => {
        const params = req.allParams();
        //params.id = params.id ? Array.from(params.id) : null;
        params.id = params.id ? params.id.replace('[', '').replace(']', '').replace(/ /g, '').split(',') : null;
        params.username = params.username ? params.username.replace('[', '').replace(']', '').replace(/ /g, '').split(',') : null;
        if (!params.username && !params.id) {
            return res.badRequest({Error: 'id or username is required'});
        }
        if ((params.username && !Array.isArray(params.username)) || (params.id && !Array.isArray(params.id))) {
            return res.badRequest({Error: 'id and username is must an array'});
        }
        // const index = sails.config.custom.users.findIndex(value => value.username === username);
        // if (index === -1) {
        //     return res.json({code: 201, message: 'Username is not match with any account'});
        // }
        // sails.config.custom.users.splice(index, 1);

        const result = await UserService.removeUser(params);
        return res.ok(result);
    }
};

module.exports = UserController;
