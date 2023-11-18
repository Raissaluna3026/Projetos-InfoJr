import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function cadastro(req, res) {
  const db = await open({
    filename: './prisma/pokedex.db',
    driver: sqlite3.Database
  })

  const { pokemon, login, imagem } = req.body;

  if (!pokemon || !login) {
    return res.status(400).json({ error: 'Login e pokemons sao necessários' });
  }

  try {
    const result = await db.run(`INSERT INTO Favs (pokemon, login,imagem) VALUES (?, ?, ?)`, [pokemon, login,imagem]);
    res.status(201).json({ success: true, id: result.lastID });
  } catch (error) {
    res.status(500).json({ error: 'Algo deu errado ao adicionar o cliente' });
  }
}