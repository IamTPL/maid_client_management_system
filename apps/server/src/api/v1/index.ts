import express from 'express';
import userRoutes from './users/user.route';

const router = express.Router();

// Gắn user routes vào đường dẫn /users
router.use('/users', userRoutes);

export default router;
