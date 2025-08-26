import { Router } from 'express';
import {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../controllers/productController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = Router();

// Criar novo produto
router.post('/registrar', authenticateToken, createProduct);
// Listar produtos
router.get('/catalogo', getAllProducts);
// Pegar produto pelos parametros
router.get('/:id', getProductById);
// Atualizar produto
router.put('/atualizar/:id', authenticateToken, updateProduct);
// Deletar produtos
router.delete('/excluir/:id', authenticateToken, deleteProduct);

export default router;
