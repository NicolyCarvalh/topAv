import { Request, Response } from 'express';
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

export default {
        async listar (request: Request, response: Response) {
            const {id, nome, sobrenome, email, sexo, idade} = request.body;
            const users = await Users.listar({
                $or: [{ id: id }, {nome: nome }, { sobrenome: sobrenome }, { email: email}, {sexo: sexo}, {idade: idade}],
            });
            if (users) {
                return response.status(200).json(users);
            }
            return response.status(400).json({ message: 'dados não encontrados' });
        },

        async buscarID (request: Request, response: Response) {
            const {id} = request.body;
            const {nome, sobrenome} = request.body;
            const users = await Users.buscarID({
                $or: [{ id: id }, {nome: nome }, { sobrenome: sobrenome }],
            });
            if (users) {
                return response.status(200).json(users);
            }
            return response.status(400).json({ message: 'id nao encontrada' });
        },

        async buscarIdade (request: Request, response: Response) {
            const {idade} = request.body;
            const {nome, sobrenome } = request.body;
            const users = await Users.buscarIdade({
                $or: [{ idade: idade }, {nome: nome }, { sobrenome: sobrenome }],
            });
            if (users) {
                return response.status(200).json(users);
            }
            return response.status(400).json({ message: 'idade não localizada' });
        }, 

        async buscarSexo (request: Request, response: Response) {
            const {sexo} = request.body;
            const {nome, sobrenome } = request.body;
            const users = await Users.buscarSexo({
                $or: [{ sexo: sexo }, {nome: nome }, { sobrenome: sobrenome }],
            });
            if (users) {
                return response.status(200).json(users);
            }
            return response.status(400).json({ message: 'sexo não localizado' });
        }
    }