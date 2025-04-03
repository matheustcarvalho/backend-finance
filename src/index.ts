import express from 'express';
import transferRoutes from './routes/transferRoutes';
import sequelize from './config/database';

const app = express();
app.use(express.json());
app.use('/api', transferRoutes);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync();

        app.listen(3000, '0.0.0.0', () => console.log('Servidor rodando na porta 3000'));
    } catch (err) {
        console.error('Conexão com o banco de dados falhou:', err);
    }
})();

export default app;
