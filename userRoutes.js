// routes/userRoutes.js
const express = require('express');
const { registerUser, authUser } = require('./userController');
const { protect } = require('./authentiation');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;
