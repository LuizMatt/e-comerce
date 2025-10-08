const UserService = require('../services/UserService');

const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json({ message: 'Usuário criado com sucesso', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const token = await UserService.loginUser(req.body);
        res.json({ message: 'Login realizado com sucesso', token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if (parseInt(userId) !== req.user.id)
            return res.status(403).json({ message: 'Acesso negado' });

        await UserService.updateUser(userId, req.body);
        res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};  

const deleteUser = async (req, res) => {
    try {
        await UserService.deleteUser(req.params.id);
        res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
