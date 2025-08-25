import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.mjs';
import transactionsRouter from './routes/transactionsRoutes.mjs';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', productsRouter);
app.use('/transacoes', transactionsRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API de Estoque online!' });
});

export default app;
