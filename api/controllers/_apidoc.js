// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
     @apiDefine api Admin access rights needed.
     Optionally you can write here further Informations about the permission.

     An "apiDefine"-block can have an "apiVersion", so you can attach the block to a specific version.

     @apiVersion 1.0.1
 */


// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------
/**
     @apiDefine api This title is visible in version 1.0.0
     @apiVersion 1.0.0
 */

/**
     @api {get} /api 01. Get API page
     @apiVersion 1.0.0
     @apiName GetAPI
     @apiGroup API
     @apiPermission api

     @apiDescription
     API description 1.0.0 - This is description for API and Git

     Use apidoc to generate the API document, using default template

     And use git to remote respository on Github

     @apiHeader {String} token Token is required
     @apiHeader {Number} apiTotal Number of apis

     @apiHeaderExample {json} Header-Example:
     {
          "token": "flkdjsfkasjfeoiwafjos",
          "apitotal": 2
     }

     @apiParam {String} param API param

     @apiParamExample {json} Param-Example:
     {
          "param": The param is not neccessary
     }
     @apiSuccess {String} result Result is a string

     @apiSuccessExample Success-Response:
     HTTP/1.1 200 OK
     {
          'result': 'Get API'
     }

     @apiError APINotFound The api url not found

     @apiErrorExample Error-response:
     HTTP/1.1 404 Not Found
     {
          'error': 'APINotFound'
     }
*/
