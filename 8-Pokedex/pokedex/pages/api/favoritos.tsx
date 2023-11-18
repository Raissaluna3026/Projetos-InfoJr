import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function getFavoritos(req, res) {
  const db = await open({
    filename: './prisma/pokedex.db',
    driver: sqlite3.Database
  })

  const favoritos = await db.all('SELECT * FROM Favs')
  res.json(favoritos)
}

//rota q retorna os clientes q estao na fila, ou seja fila = true