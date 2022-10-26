import { Request, Response } from 'express';
const Users = require('../users.json')

interface Usuario {
    id: Number;
    nome: String;
    sobrenome: String;
    email: String;
    sexo: String;
    idade: Number;
}


export default {
    listar(request: Request, response: Response) {
        return response.status(200).json(Users);
    },

    buscarId(request: Request, response: Response) {
        const { id } = request.params;
        const resultado = Users.find(
            (usuario: Usuario) => usuario.id == parseInt(id)
        );

        return response.status(200).json(resultado)
    },

    buscarIdade(request: Request, response: Response) {
        const { idade } = request.body;
        const resultado = Users.filter(
            (usuario: Usuario) => usuario.idade > idade
        );
        if(resultado){
            return response.status(200).json(resultado)
        }
        return response
            .status(200)
            .json({message: 'Usuario com idade não encontrado'});
    },
    buscarSexo(request: Request, response: Response) { 
        const{ sexo } = request.body;
        const resultado = Users.filter(
            (usuario: Usuario) => usuario.sexo === sexo
        );
        if(resultado){
            return response.status (200).json(resultado);
        }
        return response
            .status(200)
            .json({message: 'Usuario com sexo não encotrado'})
}
};
