import express from 'express';
import {
  addProduct,
  getAllProducts,
  getProductBySlug,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

import { verifyAdmin } from '../Auth/auth.js';

const router = express.Router();

router.post('/add', verifyAdmin, addProduct);
router.get('/', getAllProducts);
router.get('/:slug', getProductBySlug);
router.put('/:id', verifyAdmin, updateProduct);
router.delete('/:id', verifyAdmin, deleteProduct);

export default router;
