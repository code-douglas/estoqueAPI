import { Router } from 'express';
import { registerTransaction } from '../controllers/transactionsController.mjs';
import { authMiddleware } from '../middlewares/authMiddleware.mjs';

const router = Router();

router.post('/registrar', authMiddleware, registerTransaction);

export default router;
