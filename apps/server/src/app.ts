import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { CONFIG } from './config';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS Configuration (Security Guard)
// In production, we must restrict who can access our API.
const whitelist = ['http://localhost:3000']; // List of allowed domains (Frontend)

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (whitelist.indexOf(origin) !== -1 || CONFIG.ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies/headers to be sent
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));

import apiRoutes from './api/v1';

// ... (các middleware khác)

// API Routes
app.use(CONFIG.API_PREFIX, apiRoutes); // /api/v1

// Health Check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: CONFIG.ENV === 'development' ? err.message : undefined,
  });
});

export default app;
