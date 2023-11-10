import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function handler(req, res) {
    if (req.method === 'PUT') {

        const db = await open({
            filename: './prisma/cliente.db',
            driver: sqlite3.Database
          });
    
          const { id, naFila } = req.body
          console.log(req.body)
    
          const statement = await db.prepare(`UPDATE Clientes SET naFila = ? WHERE id = ?`);
          await statement.run(naFila, id);
      res.status(200).json({ message: 'Artigo atualizado com sucesso' });
    } else {
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
//rota que diz que os clientes foram atentidos (n esta mais na fila)