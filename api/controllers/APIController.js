module.exports = {
    /**
     * @api {get} /api 01. Get API page
     * @apiSampleRequest off
     * @apiVersion 1.0.1
     * @apiName GetAPI
     * @apiGroup API
     * @apiPermission api
     * 
     * @apiDescription 
     * API description - This is description for API and Git
     * 
     * Use apidoc to generate the API document, using default template
     * 
     * And use git to remote respository on Github
     * 
     * @apiHeader {String} token Token is required
     * @apiHeader {Number} apiTotal Number of apis
     * 
     * @apiHeaderExample {json} Header-Example: 
     *     {
     *         "token": "flkdjsfkasjfeoiwafjos",
     *         "apitotal": 2
     *     }
     * 
     * @apiParam {String} param API param
     * 
     * @apiParamExample {json} Param-Example:
     *     {
     *         "param": "The param is not neccessary"
     *     }
     * 
     * @apiExample {js} Example usage:
     *      Access http://localhost:1337/api.
     * 
     * @apiSuccess {String} result Result is a string
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         result: 'Get API'
     *     }
     * 
     * @apiError APINotFound The api url not found
     * 
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *         error: 'APINotFound'
     *     }
     */
    getAPI: (req, res) => {
        return res.ok('Get API');
    },
    /**
     * @api {post} /api 02. Post API
     * @apiVersion 1.0.1
     * @apiName PostAPI
     * @apiGroup API
     * 
     * @apiHeader {String} token Token is required
     * 
     * @apiSuccess {String} result Result is a String
     * 
     * @apiSuccessExample Response-Success:
     *     {
     *         result: 'This is a result'
     *     }
     */

     /**
     * @apiIgnore Not finished Method
     * @api {post} /api 02. Post API
     * @apiVersion 1.0.1
     * @apiName PostAPI
     * @apiGroup API
     * 
     * @apiHeader {String} token Token is required
     * 
     * @apiSuccess {String} result Result is a String
     * 
     * @apiSuccessExample Response-Success:
     *     {
     *         result: 'This is a result'
     *     }
     */
    postAPI: (req, res) => {
        const params = req.allParams();
        return res.ok({Page: 'Post API', ...params});
    },
    /** 
        @api {put} /api 03. Put API
        @apiVersion 1.0.1
        @apiName PutAPI
        @apiGroup API

        @apiHeader {String} token Token is requied
        @apiHeaderExample {json} Header-Example
        {
            "token": "thisisatokenforloginusetoverify"
        }

        @apiParam {String} username Username is required
        @apiParam {String} password Password is required
        @apiParamExample {json} Params-Example
        {
            "username": "thisisusername",
            "password": "passwordpasword"
        }

        @apiSuccess {Boolean} isMatch Username and Password is match with a account
        @apiSuccessExample Success-Reponse
        HTTP/1.1 200 ok
        {
            isMatch: true
        }

        @apiError {Boolean} isMatch false
        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        {
            isMatch: false
        }
     */
    putAPI: (req, res) => {
        return res.ok('Put API');
    },
    /**
        @api {delete} /api 04. Delete API
        @apiName DeleteApi
        @apiDescription Author: CanhToan
        @apiVersion 1.0.1
        @apiGroup API

        @apiHeader {String} token Token is requied
        @apiHeaderExample {json} Header-Example
        {
            "token": "tokeninhere"
        }

        @apiParam {String} options Options is a option
        @apiParamExample {json} Param-Example
        {
            "apiID": "apiidinhere"
        }

        @apiSuccess {String} result Result is response of delete api
        @apiSuccessExample Success-Response
        HTTP/1.1 200 ok
        {
            result: 'Deleted'
        }

        @apiError {String} result Result is delete fail
        @apiErrorExample Error-Response
        HTTP/1.1 400 error
        { result: 'token invalid' }
        { result: 'apiID is not match' }
    */
    deleteAPI: (req, res) => {
        return res.ok('Delete API');
    }
}