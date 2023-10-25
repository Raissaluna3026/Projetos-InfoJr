/* eslint-disable quotes */
/* eslint-disable indent */

import {Request, Response} from 'express';
import { prisma } from "../database";


export default{
    async createUser(request:Request, response: Response){
        try{
            const {name, email, idade, cidade, estado} = request.body;
            const userExist = await prisma.user.findUnique({
                where:{
                    email: email,
                }
            });


            if(userExist){
                return response.json({
                    error: true,
                    message: 'Erro: Usuário já existe.'
                });
            }

            const user = await prisma.user.create({
                data: {name, email, idade, cidade, estado}
            });

            return response.json({
                error: false,
                message: 'Sucesso. Usuário cadastrado.',
                user
            });

        }catch(error) {
            return response.json({ message: error.message });
        }
    }
};