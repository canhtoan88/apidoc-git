const jwt = require('./jwt');
const tokensecret = process.env.TOKEN_SECRET;

const auth = (req) => {
    if (!req || !req.headers || !req.headers.token) {
        return null;
    }

    const token = req.headers.token;
    const data = jwt.decrypt(token, tokensecret);

    if (!data || !data.id) {
        return null;
    }

    return data;
};

module.exports = auth;
