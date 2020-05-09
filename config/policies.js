/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

    /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

    // '*': true,
    'User/UserController': {
        'getListUsers': ['tokenAuth', 'isAdmin'],
        'login': true,
        'createUser': true,
        'deleteUser': ['tokenAuth', 'isAdmin']
    },
    'User/AdminController': {
        'createAdmin': ['tokenAuth', 'isAdmin'],
        'loginAdmin': true
    }

};
