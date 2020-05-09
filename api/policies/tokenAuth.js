const moment = require('moment');
const Utils = require('../utils');

module.exports = async (req, res, next) => {
    const token = req.headers.token || null;
    if (!token) {
        return res.badRequest({code: 203, message: 'Token is required', data: null});
    }

    // Check token valid
    const authData = await Utils.decrypt(token);
    if (!authData || !authData.id) {
        return res.badRequest({code: 201, message: 'Token was wrong', data: null});
    }

    // Check expired token
    const expiredAt = Date.now() - authData.expiredAt; // moment(Date.now()).diff(authData.expiredAt);
    if (expiredAt >= 0) {
        if (moment().diff(authData.expiredAt, 'days') > 30) {
            Utils.destroy(token);
        }
        return res.badRequest({code: 201, message: 'Token was expired', data: null});
    }

    return next();
}