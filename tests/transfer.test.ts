import request from 'supertest';
import app from '../src/index';

describe('Transfer API', () => {
    it('Deve realizar uma transferência com sucesso', async () => {
        const response = await request(app)
            .post('/api/transfer')
            .send({
                payer: 1,
                payee: 2,
                value: 100,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Transferência realizada com sucesso');
        expect(response.body).toHaveProperty('notification', 'Notificação enviada com sucesso');
    });

    it('Deve falhar ao transferir saldo insuficiente', async () => {
        const response = await request(app)
            .post('/api/transfer')
            .send({
                payer: 1,
                payee: 2,
                value: 999999,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Saldo insuficiente');
    });
});
