const express = require('express');

const usersController = require('../controllers/users');
const { validateToken } = require('../utilities/jwt-tokens');

const router = express.Router();

router.get('/getUsers', validateToken, usersController.getAllUsers);

router.get('/getMyProfile', validateToken, usersController.getMyProfile);

module.exports = router;