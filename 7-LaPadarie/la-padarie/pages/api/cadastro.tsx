import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function cadastro(req, res) {
  const db = await open({
    filename: './prisma/cliente.db',
    driver: sqlite3.Database
  })

  const { name, paes } = req.body;

  if (!name || !paes) {
    return res.status(400).json({ error: 'Nome e pães são necessários' });
  }

  try {
    const result = await db.run(`INSERT INTO Clientes (name, paes) VALUES (?, ?)`, [name, paes]);
    res.status(201).json({ success: true, id: result.lastID });
  } catch (error) {
    res.status(500).json({ error: 'Algo deu errado ao adicionar o cliente' });
  }
}
