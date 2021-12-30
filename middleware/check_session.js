const jwt = require('jsonwebtoken');
const authHelper = require('../helpers/auth_helper')

module.exports = checkSession;

async function checkSession(req, res, next) {

    if (req.headers.authorization) {
        // decode token
        const authToken = req.user;
        console.log(authToken, 'auth token');
        req.user = await authHelper.checkUserAuth(authToken.user);
    }
    next()
}
