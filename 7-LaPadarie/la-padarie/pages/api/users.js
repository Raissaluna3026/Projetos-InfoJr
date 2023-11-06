import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function getUsers(req, res) {
  const db = await open({
    filename: 'la-padarie\prisma\cliente.db',
    driver: sqlite3.Database
  })

  const users = await db.all('SELECT * FROM Clientes')
  res.json(users)
}