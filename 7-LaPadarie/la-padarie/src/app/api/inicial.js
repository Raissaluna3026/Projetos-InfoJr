import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, paes } = req.body;

    try {
      const novoCliente = await prisma.clientes.create({
        data: {
          name: name,
          paes: paes,
        },
      })

      res.status(200).json({ message: 'Novo cliente criado!', novoCliente });
      console.log("foiiiiiiii")
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao criar o cliente' });
      console.log("nnn foiii")
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}