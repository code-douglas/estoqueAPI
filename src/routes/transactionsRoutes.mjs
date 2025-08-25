import { Router } from 'express';
import { registerTransaction } from '../controllers/transactionsController.mjs';

const router = Router();

router.post('/registrar', registerTransaction);

export default router;
