import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function getUsers(req, res) {
  const db = await open({
    filename: './prisma/pokedex.db',
    driver: sqlite3.Database
  })

  const usuario = await db.all('SELECT * FROM Usuarios WHERE logado')
  res.json(usuario)
}

//rota q retorna os clientes q estao na fila, ou seja fila = true