const express = require('express');
const usersController = require('./userController');

const router = express.Router();

router.post('/users', usersController.createUser);
router.put('/users/:userId', usersController.updateUser);
router.delete('/users/:userId', usersController.deleteUser);
router.get('/users/:userId', usersController.getUserById);

module.exports = router;
