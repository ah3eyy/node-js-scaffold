const authHelper = require('./auth_helper');
const expressJwt = require('express-jwt');

function jwt() {
    const secret = process.env.JWT_SECRET;
    return expressJwt({secret, algorithms: ['HS256'], isRevoked}).unless({
        path: [
            '/api/auth/login',
            '/api/auth/register',
            '/api/auth/forgot-password',
            '/api/auth/reset-password',
            '/api/auth/verify-code',
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await authHelper.checkUserAuth(payload.user);
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }
    done();
}

module.exports = {
    jwt
}

