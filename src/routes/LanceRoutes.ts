import { Router } from 'express';
import LanceController from '../controllers/LanceController';

const LanceRouter = Router();

LanceRouter.get('/lance', LanceController.listarLance);

LanceRouter.get('/lance/:id', LanceController.listarLance);

LanceRouter.post('/lance', LanceController.criarLance);

LanceRouter.patch('/lance/:id', LanceController.atualizarLance);

LanceRouter.delete('/lance/:id', LanceController.deletarLance);

export default LanceRouter;
