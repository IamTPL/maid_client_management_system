import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const CONFIG = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3001,
  MONGO_URI:
    process.env.MONGO_URI || 'mongodb://localhost:27017/maid_client_db',
  API_PREFIX: '/api/v1',
} as const;
