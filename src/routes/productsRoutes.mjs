import { Router } from 'express';
import {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../controllers/productController.mjs';
import { authMiddleware } from '../middlewares/authMiddleware.mjs';

const router = Router();

// Criar novo produto
router.post('/registrar', authMiddleware, createProduct);
// Listar produtos
router.get('/catalogo', getAllProducts);
// Pegar produto pelos parametros
router.get('/:id', getProductById);
// Atualizar produto
router.put('/atualizar/:id', authMiddleware, updateProduct);
// Deletar produtos
router.delete('/excluir/:id', authMiddleware, deleteProduct);

export default router;
