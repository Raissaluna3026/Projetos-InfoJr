import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function sumPaes(req, res) {
  const db = await open({
    filename: './prisma/cliente.db',
    driver: sqlite3.Database
  })

  const soma = await db.get('SELECT SUM(paes) as total FROM Clientes WHERE naFila = 0');
  res.json(soma)
}
