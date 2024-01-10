/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from '../page.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';

export default function Body({login}){

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);

    //retorna todos os pokemons
    useEffect(() => {
        getPokemons();

    }, []);
    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i <= 15; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
            setPokemons(res);
            setPokemonsFiltrados(res);});

    }

    const pokemonFilter = (name: any) => {
        var novosPokemonsFiltrados = [];
        console.log(name)
    
        for (var i in pokemons){
            if (pokemons[i].data.name.includes(name)) {
                novosPokemonsFiltrados.push(pokemons[i]);
            }
        }
    
        setPokemonsFiltrados(novosPokemonsFiltrados);
    };
    const [visivel, setVisivel] = useState(false);

    const estrelaFav = () => {
        setVisivel(!visivel);
    };
    
    
    async function favoritos(pokemon: string, login: string, imagem:string) {
        try {
        const chave = `${pokemon}-${login}`;
          const response = await axios.post('http://localhost:3000/api/favoritar', {
            pokemon: pokemon,
            login: login,
            imagem: imagem,
            chave: chave
          });
          console.log('rodando')
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

    console.log(login)

        
    return(
    <>
    <Header pokemonFilter={pokemonFilter}/>
        <div className={styles.body}>
            <div className={styles.todosJuntos}>
                <h2 className={styles.titulao}>Pokédex</h2>
                <div className={styles.pokemons}>
                    {pokemonsFiltrados.map((pokemon, key) => (
                    <div key={key} className={styles.pokemon}>
                        <div className={styles.estrelas}>
                            <img onClick={() => favoritos(pokemon.data.name, login, pokemon.data.sprites.front_default)}src="estrela.png" alt="" />
                            {visivel &&(
                                <img onClick={() => estrelaFav()} src="estrela (1).png" alt="" />
                            )}
                            
                        </div>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}> {pokemon.data.name}</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img className={styles.pokemonImg} src={pokemon.data.sprites.front_default} />
                    </div>    
                    ))}                   
                </div>
            </div>
        </div>
    </>
    )
}