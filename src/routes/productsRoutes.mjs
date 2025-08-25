import { Router } from 'express';
import {
  createProduct,
  getProductById,
  getAllProducts
} from '../controllers/productController.mjs';

const router = Router();

// Criar novo produto
router.post('/registrar', createProduct);
// Pegar produto pelos parametros
router.get('/:id', getProductById);
// Listar produtos
router.get('/catalogo', getAllProducts);

export default router;
