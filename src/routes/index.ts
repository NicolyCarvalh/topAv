import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/list', UserController.listar);
routes.get('/find', UserController.buscarID);
routes.post('/find', UserController.buscarIdade);
routes.post('/find', UserController.buscarSexo);

export default routes;
