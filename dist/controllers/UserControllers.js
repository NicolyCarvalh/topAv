"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users = require('../users.json');
exports.default = {
    listar(request, response) {
        return response.status(200).json(Users);
    },
    buscarId(request, response) {
        const { id } = request.params;
        const resultado = Users.find((usuario) => usuario.id == parseInt(id));
        return response.status(200).json(resultado);
    },
    buscarIdade(request, response) {
        const { idade } = request.body;
        const resultao = Users.filter((usuario) => usuario.idade > idade);
        if (resultado) {
            return response.status(200).json(resultado);
        }
        return response
            .status(200)
            .json({ message: 'Usuario com idade não encontrado' });
    },
    buscarSexo(request, response) { },
    const: { sexo } = request.body,
    const: resultado = Users.filter((usuario) => usuario.sexo == sexo),
    if(resultado) {
        return response.status(200).json(resultado);
    },
    return: response
        .status(200)
        .json({ message: 'Usuario com sexo não encotrado' })
};
