const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);

router.get('/', authMiddleware, UserController.getAllUsers);
router.get('/:id', authMiddleware, UserController.getUserById);
router.put('/:id', authMiddleware, UserController.updateUser);
router.delete('/:id', authMiddleware, UserController.deleteUser);

module.exports = router;
