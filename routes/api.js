const express = require('express');
const router = express.Router();
const authRoutes = require('./auth_routes');

const userMiddleware = require('../middleware/check_session')

router.use('/auth/', authRoutes)
// router.use('/v1/onboarding/', userMiddleware, userRoutes)

module.exports = router;

