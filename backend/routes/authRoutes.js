import express from 'express';
import {
  registerUser,
  loginUser,
  getProfile,
  verifyToken
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getProfile);

export default router;

