import { Router } from 'express';
import {
  createUser,
  loginUser
} from '../controllers/userController.mjs';

const router = Router();

router.post('/entrar', loginUser);
router.post('/registrar', createUser);

export default router;
