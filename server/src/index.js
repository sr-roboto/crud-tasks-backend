import { app } from './app.js';
import { PORT } from './configs/dotenv.config.js';
import { connectDB } from './database/db.js';

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`🚀 servidor corriendo en el puerto: ${PORT} 🚀`);
  } catch (error) {
    console.error(error);
  }
}

main();
