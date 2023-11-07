import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function getUsers(req, res) {
  const db = await open({
    filename: './prisma/cliente.db',
    driver: sqlite3.Database
  })

  const clients = await db.all('SELECT * FROM Clientes WHERE naFila')
  res.json(clients)
}
