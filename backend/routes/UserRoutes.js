const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);

router.get('/users', authMiddleware, UserController.getAllUsers);
router.get('/users/:id', authMiddleware, UserController.getUserById);
router.put('/users/:id', authMiddleware, UserController.updateUser);
router.delete('/users/:id', authMiddleware, UserController.deleteUser);

module.exports = router;
