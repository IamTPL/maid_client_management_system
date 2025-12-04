import mongoose from 'mongoose';
import app from './app';
import { CONFIG } from './config';

const startServer = async () => {
  try {
    // Connect to MongoDB
    // Ensure you have created apps/server/.env with MONGO_URI
    await mongoose.connect(CONFIG.MONGO_URI);
    console.log('✅ MongoDB connected successfully');

    // Start Express Server
    app.listen(CONFIG.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${CONFIG.PORT}`);
      console.log(`   Environment: ${CONFIG.ENV}`);
    });
  } catch (error) {
    console.error('❌ Server failed to start:', error);
    process.exit(1);
  }
};

startServer();
