const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 10;

const createUser = async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({ name, email, password: hashedPassword });
    return user;
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Senha incorreta');

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
};

const getAllUsers = async () => {
    return await User.findAll({ attributes: { exclude: ['password'] } });
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) throw new Error('Usuário não encontrado');
    return user;
};

const updateUser = async (id, { name, email, password }) => {
    const hashedPassword = password ? await bcrypt.hash(password, SALT_ROUNDS) : undefined;

    const [updated] = await User.update(
        {
            name,
            email,
            ...(password && { password: hashedPassword })
        },
        { where: { id } }
    );

    if (!updated) throw new Error('Usuário não encontrado');
};

const deleteUser = async (id) => {
    const deleted = await User.destroy({ where: { id } });
    if (!deleted) throw new Error('Usuário não encontrado');
};

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
