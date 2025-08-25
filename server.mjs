import app from './src/app.mjs';
import connectDB from './src/config/db.mjs';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.SERVER_PORT || 5000;
const mongoURI = process.env.MONGO_URI_BASE;

connectDB(mongoURI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Falha ao iniciar o servidor:', err);
  });
