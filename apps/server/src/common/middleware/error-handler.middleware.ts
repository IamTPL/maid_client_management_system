import { Request, Response, NextFunction } from 'express';
import { CONFIG } from '../../config';

// Define Custom Error Interface (Optional but recommended)
interface AppError extends Error {
  statusCode?: number;
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  // 1. Log the error (In production, use a logger like Winston/Sentry)
  console.error(`❌ Error: ${err.message}`);
  if (CONFIG.ENV === 'development') {
    console.error(err.stack);
  }

  // 2. Determine Status Code
  // If we manually threw an error with statusCode, use it. Otherwise 500.
  const statusCode = err.statusCode || 500;

  // 3. Send Response
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only show stack trace in Development
    stack: CONFIG.ENV === 'development' ? err.stack : undefined,
  });
};
