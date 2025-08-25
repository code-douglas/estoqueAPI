import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.mjs';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', productsRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API de Estoque online!' });
});

export default app;
