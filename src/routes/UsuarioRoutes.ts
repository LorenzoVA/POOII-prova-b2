import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const UsuarioRouter = Router();

UsuarioRouter.get('/usuario', UsuarioController.listarUsuario);

UsuarioRouter.get('/usuario/:id', UsuarioController.listarUsuario);

UsuarioRouter.post('/usuario', UsuarioController.criarUsuario);

UsuarioRouter.patch('/usuario/:id', UsuarioController.atualizarUsuario);

UsuarioRouter.delete('/usuario/:id', UsuarioController.deletarUsuario);

export default UsuarioRouter;
