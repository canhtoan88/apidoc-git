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
            "Error": "Token invalid"
        }
        @apiErrorExample Error-Response
        HTTP/1.1 500 error
        {
            "Error": "Internal Server Error"
        }
     */
    getUsers: (req, res) => {
        const token = req.headers.token;
        if (!token)
            return res.badRequest({Error: 'token is required'});
        return res.ok({
            code: 200,
            message: 'ok',
            data: sails.config.custom.users.map(value => {return {fullname: value.fullname, username: value.username}})
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
    postUser: (req, res) => {
        const {fullname, username, password} = req.body;
        if (!fullname)
            return res.badRequest({Error: 'fullname is required'})
        if (!username)
            return res.badRequest({Error: 'username is required'})
        if (!password)
            return res.badRequest({Error: 'password is required'})
        const index = sails.config.custom.users.findIndex(value => value.username === username)
        if (index === -1)
            sails.config.custom.users.push({fullname, username, password})
        else {
            return res.badRequest({Error: 'username already exist'})
        }
        return res.ok({fullname, username});
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
    putUser: (req, res) => {
        const {username, password} = req.body;
        const user = sails.config.custom.users.find(value => value.username === username);
        if (!username)
            return res.badRequest({Error: 'username is required'})
        if (!password)
            return res.badRequest({Error: 'password is required'})
        if  (!user)
            return res.json({code: 201, message: 'Username is not match with any account', data: null})
        if (user.password === password)
            return res.ok({code: 200, message: 'ok', data: {fullname: user.fullname, username}})
        return res.json({code: 201, message: 'Password is incorrect', data: null});
    },
    /**
        @api {delete} /user 04. Delete user
        @apiName deleteUser
        @apiDescription Author: Canh Toan - Deleting user by username
        @apiVersion 1.0.1
        @apiGroup User

        @apiHeader {String} token Token is required

        @apiParam {String} username username is required
        @apiParamExample {json} Param-Example
        {
            "username": "canhtoan88"
        }

        @apiSuccessExample Succes-Response
        HTTP/1.1 200 ok
        {
            "code": 200,
            "message" "User canhtoan88 was deleted"
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
    deleteUser: (req, res) => {
        const {username} = req.body;
        if (!username)
            return res.badRequest({Error: 'username is required'})
        const index = sails.config.custom.users.findIndex(value => value.username === username);
        if (index === -1)
        return res.json({code: 201, message: 'Username is not match with any account'});
        sails.config.custom.users.splice(index, 1);
        return res.ok({code: 200, message: `User ${username} was deleted`});
    }
}

module.exports = UserController;