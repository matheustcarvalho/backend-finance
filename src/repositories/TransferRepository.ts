import Transfer from '../models/Transfer';
import { Transaction } from 'sequelize';

class TransferRepository {
    public async createTransfer(payerId: number, payeeId: number, value: number, options?: { transaction?: Transaction }) {
        return await Transfer.create({ payerId, payeeId, value }, options);
    }
}

export default new TransferRepository();
