import { Request, Response } from 'express';
import TransferService from '../services/TransferService';
import { NotificationService } from '../services/NotificationService';

class TransferController {
    public async createTransfer(req: Request, res: Response) {
        const { payer, payee, value } = req.body;

        try {
            await TransferService.transferMoney(payer, payee, value);
            const notificationResult = await NotificationService.notify();
            const notificationStatus = notificationResult.success ? 'Notificação enviada com sucesso' : notificationResult.message;

            res.status(200).json({
                message: 'Transferência realizada com sucesso',
                notification: notificationStatus
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Erro inesperado' });
            }
        }
    }
}

export default new TransferController();
