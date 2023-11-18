/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from '../page.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import Header2 from './header2';

export default function Body({login}){

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsFavoritos, setPokemonsFavoritos] = useState([]);


    useEffect(() => {
    axios.get('http://localhost:3000/api/favoritos')
        .then(res => {
        setPokemonsFavoritos(res.data);
        })
        .catch(err => console.error(err));
    }, [pokemonsFavoritos]);


    const [visivel, setVisivel] = useState(false);

    const estrelaFav = () => {
        setVisivel(!visivel);
    };
    
    

    console.log(login)

        
    return(
    <>
    <Header2/>
        <div className={styles.body}>
            <div className={styles.todosJuntos}>
                <h2 className={styles.titulao}>Favoritos</h2>
                <div className={styles.pokemons}>
                    {pokemonsFavoritos.map((pokemon, key) => (
                    <div key={key} className={styles.pokemon}>
                        <div className={styles.estrelas}>
                            <img src="estrela (1).png" alt="" />
                        </div>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}> {pokemon.pokemon}</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src={pokemon.imagem} />
                    </div>    
                    ))}                   
                </div>
            </div>
        </div>
    </>
    )
}