import { Request, Response } from 'express';
import * as UserService from './user.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    // Gọi Service để xử lý logic
    const newUser = await UserService.createUserService({ name, email } as any);

    res.status(201).json({
      success: true,
      data: newUser,
      message: 'User created successfully via Service Layer!',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsersService();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
