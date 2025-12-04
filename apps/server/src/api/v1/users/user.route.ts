import express from 'express';
import { createUser, getUsers } from './user.controller';

const router = express.Router();

// POST /api/v1/users -> Tạo user
router.post('/', createUser);

// GET /api/v1/users -> Lấy danh sách user
router.get('/', getUsers);

export default router;
