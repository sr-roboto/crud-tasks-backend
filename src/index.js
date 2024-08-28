import { app } from './app.js';
import { PORT } from './configs/dotenv.config.js';
import { connectDB } from './database/db.js';

//ponemos el servidor en escucha
app.listen(PORT, () => {
  connectDB();
  console.log(`servidor corriendo en el puerto: ${PORT}`);
});

export { app };
