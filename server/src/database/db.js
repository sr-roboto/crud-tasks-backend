import mongoose from 'mongoose';
import { MONGODB_URI } from '../configs/dotenv.config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Conectado a la base de datos: ${mongoose.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
