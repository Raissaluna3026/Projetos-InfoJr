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
    },
    async ListUser(request:Request, response: Response){
        try{
            const { id } = request.params;

            const user = await prisma.user.findUnique({
                where: {id: Number(id)}
            });

            if(!user){
                return response.json({
                    error: true,
                    message: 'Error: Usuário não encontrado.',
                });
            }

            return response.json({
                error: false,
                user
            });

        }catch(error) {
            return response.json({ message: error.message });
        }
    },

    async findUserByName(request, response) {
        try {
        const { name } = request.params;
    
        const users = await prisma.user.findMany({
            where: {
            name: name,
            },
        });
    
        if (users.length === 0) {
            return response.json({
            error: true,
            message: 'Usuário não encontrado.',
            });
        }
    
        return response.json({
            error: false,
            user: users[0], 
        });
        } catch (error) {
        return response.json({ message: error.message });
        }
    },
    async findUserByEmail(request, response) {
        try {
          const { email } = request.params;
      
          const user = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });
      
          if (!user) {
            return response.json({
              error: true,
              message: 'Usuário não encontrado.',
            });
          }
      
          return response.json({
            error: false,
            user,
          });
        } catch (error) {
          return response.json({ message: error.message });
        }
      },
};