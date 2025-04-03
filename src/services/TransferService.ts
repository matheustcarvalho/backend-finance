import UserRepository from '../repositories/UserRepository';
import TransferRepository from '../repositories/TransferRepository';
import { authorizeTransfer } from '../utils/authorize';
import sequelize from '../config/database';

class TransferService {
    public async transferMoney(payerId: number, payeeId: number, value: number) {
        const payer = await UserRepository.findById(payerId);
        const payee = await UserRepository.findById(payeeId);

        if (!payer || !payee) {
            throw new Error('Usuário não encontrado');
        }

        if (payer.isMerchant) {
            throw new Error('Comerciantes não podem realizar transferências.');
        }

        if (payer.balance < value) {
            throw new Error('Saldo insuficiente');
        }

        const authorization = await authorizeTransfer();
        if (!authorization.data.authorization) {
            throw new Error('Transferência não autorizada');
        }

        const transaction = await sequelize.transaction();

        try {
            await UserRepository.updateBalance(payerId, payer.balance - value, { transaction });
            await UserRepository.updateBalance(payeeId, payee.balance + value, { transaction });

            const transfer = await TransferRepository.createTransfer(payerId, payeeId, value, { transaction });

            await transaction.commit();

            return transfer;
        } catch (error) {
            await transaction.rollback();
            throw new Error('Erro ao realizar a transferência: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
        }
    }
}

export default new TransferService();
