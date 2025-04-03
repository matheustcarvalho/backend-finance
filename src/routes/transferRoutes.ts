import { Router } from 'express';

import TransferController from '../controllers/TransferController';

const router = Router();

router.post('/transfer', TransferController.createTransfer);

export default router;
