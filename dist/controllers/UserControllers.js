"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users = require('../users.json');
import * as Yup from 'yup';

const usersSchema = Yup.object().shape({
    id: Yup.number().required(),
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    email: Yup.string().required(),
    sexo: Yup.string().required(),
    idade: Yup.number().required(),
}); 
exports.default = {
    async listar(request, response) {
        const { id, nome, sobrenome, email, sexo, idade } = request.body;
        const users = await Users.listar({
            $or: [{ id: id }, { nome: nome }, { sobrenome: sobrenome }, { email: email }, { sexo: sexo }, { idade: idade }],
        });
        if (users) {
            return response.status(200).json(users);
        }
        return response.status(400).json({ message: 'dados não encontrados' });
    },
    async buscarID(request, response) {
        const { id } = request.body;
        const { nome, sobrenome } = request.body;
        const users = await Users.buscarID({
            $or: [{ id: id }, { nome: nome }, { sobrenome: sobrenome }],
        });
        if (users) {
            return response.status(200).json(users);
        }
        return response.status(400).json({ message: 'id nao encontrada' });
    },
    async buscarIdade(request, response) {
        const { idade } = request.body;
        const { nome, sobrenome } = request.body;
        const users = await Users.buscarIdade({
            $or: [{ idade: idade }, { nome: nome }, { sobrenome: sobrenome }],
        });
        if (users) {
            return response.status(200).json(users);
        }
        return response.status(400).json({ message: 'idade não localizada' });
    },
    async buscarSexo(request, response) {
        const { sexo } = request.body;
        const { nome, sobrenome } = request.body;
        const users = await Users.buscarSexo({
            $or: [{ sexo: sexo }, { nome: nome }, { sobrenome: sobrenome }],
        });
        if (users) {
            return response.status(200).json(users);
        }
        return response.status(400).json({ message: 'sexo não localizado' });
    }
};
