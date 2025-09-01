import { Router } from 'express';
import {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../controllers/productController.mjs';

const router = Router();

// Criar novo produto
router.post('/registrar', createProduct);
// Listar produtos
router.get('/catalogo', getAllProducts);
// Pegar produto pelos parametros
router.get('/:id', getProductById);
// Atualizar produto
router.put('/atualizar/:id', updateProduct);
// Deletar produtos
router.delete('/excluir/:id', deleteProduct);

export default router;
