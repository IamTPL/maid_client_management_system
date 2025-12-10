import express from 'express';
import { createUser, getUsers } from './user.controller';

const router = express.Router();

// POST /api/v1/users -> Create user
router.post('/', createUser);

// GET /api/v1/users -> Get user list
router.get('/', getUsers);

export default router;
