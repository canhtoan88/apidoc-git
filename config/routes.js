/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

    /* ===================================== API ================================= */
    '/': { view: 'pages/homepage' },
    'GET /api/api'       : 'APIController.getAPI',
    'POST /api/api'      : 'APIController.postAPI',
    'PUT /api/api'       : 'APIController.putAPI',
    'DELETE /api/api'    : 'APIController.deleteAPI',

    /* ===================================== USER =============================== */
    'GET /api/user'      : 'User.UserController.getListUsers',
    'POST /api/user'     : 'User.UserController.createUser',
    'PUT /api/user'      : 'User.UserController.login',
    'DELETE /api/user'   : 'User.UserController.deleteUser',

    /* ===================================== USER =============================== */
    'POST /api/admin'    : 'User.AdminController.createAdmin',
    'PUT /api/admin'     : 'User.AdminController.loginAdmin',


    /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
