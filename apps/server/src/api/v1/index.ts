import express from 'express';
import userRoutes from './users/user.route';

const router = express.Router();

// Mount user routes at /users path
router.use('/users', userRoutes);

export default router;
