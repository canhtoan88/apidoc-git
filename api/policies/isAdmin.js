const Utils = require('../utils');

module.exports = async (req, res, next) => {
    const token = req.headers.token || null;

    // Check is admin account
    const authData = await Utils.decrypt(token);
    const admin = await Admin.findOne({id: authData.id}).select(['type']);
    if (!admin || admin.type !== 'admin') {
        return res.badRequest({code: 201, message: 'Current account is not admin account'});
    }
    return next();
}