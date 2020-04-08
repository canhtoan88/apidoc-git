module.exports = {
    /**
     * @api {get} /api 01. Get API page
     * @apiSampleRequest false
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
        return res.ok('Post API');
    },
    putAPI: (req, res) => {
        return res.ok('Put API');
    }
}