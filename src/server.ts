import express, { Request, Response } from 'express';
import LanceRouter from './routes/LanceRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';
import UsuarioRouter from './routes/UsuarioRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', LanceRouter);
app.use('/api', LeilaoRouter);
app.use('/api', UsuarioRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Prova - Lorenzo Venturini');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
