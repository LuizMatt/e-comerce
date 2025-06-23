const express = require('express');
const cors = require('cors');
require('dotenv').config();

const UserRoutes = require('./routes/UserRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes);
app.use('/uploads', express.static('public/uploads'));
app.use('/products', ProductRoutes);

app.get('/', (req, res) => {
    res.send('API rodando com sucesso!');
});

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o PostgreSQL estabelecida com sucesso.');

        await sequelize.sync({ alter: true }); 

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

startServer();
