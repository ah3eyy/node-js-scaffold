const UserModel = require('../database/models/user');

async function checkUserAuth(payload) {
    return UserModel.findOne({_id: payload});
}


module.exports = {
    checkUserAuth
};
