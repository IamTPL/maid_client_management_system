import { Request, Response, NextFunction } from 'express';

// Extend Express Request interface to include 'user'
// This tells TypeScript: "Hey, req object might have a 'user' property now!"
declare global {
  namespace Express {
    interface Request {
      user?: any; // We will replace 'any' with a proper User interface later
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // 1. Get Token from Header
  // Format: "Bearer <token123>"
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: No token provided',
    });
  }

  // 2. Extract Token
  const token = authHeader.split(' ')[1];

  try {
    // TODO: Verify Token (We will implement this when learning JWT)
    // const decoded = jwt.verify(token, CONFIG.JWT_SECRET);
    // req.user = decoded; // Attach user info to request

    console.log('🔒 Auth Middleware: Token checked (Simulated)');

    // 3. Pass to next handler
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Forbidden: Invalid token',
    });
  }
};
