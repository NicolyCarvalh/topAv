"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
const routes = express_1.default.Router();
routes.get('/list', UserControllers_1.default.listar);
routes.get('/find', UserControllers_1.default.buscarID);
routes.post('/find', UserControllers_1.default.buscarIdade);
routes.post('/find', UserControllers_1.default.buscarSexo);
exports.default = routes;
