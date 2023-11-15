/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../page.module.css';

export default function body(){
    return(
        <div className={styles.body}>
            <div className={styles.todosJuntos}>
                Pokédex
                <div className={styles.pokemons}>
                    <div className={styles.pokemon}>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}>Bulbasaur</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src="Pokemon.svg" alt="" />
                    </div>
                    <div className={styles.pokemon}>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}>Bulbasaur</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src="Pokemon.svg" alt="" />
                    </div>
                    <div className={styles.pokemon}>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}>Bulbasaur</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src="Pokemon.svg" alt="" />
                    </div>
                    <div className={styles.pokemon}>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}>Bulbasaur</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src="Pokemon.svg" alt="" />
                    </div>
                    <div className={styles.pokemon}>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}>Bulbasaur</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src="Pokemon.svg" alt="" />
                    </div>
                    <div className={styles.pokemon}>
                        <div className={styles.infos}>
                            <h2 className={styles.titulo}>Bulbasaur</h2>
                            <p className={styles.grass}>GRASS</p>
                            <p className={styles.poison}>POISON</p>
                        </div>
                        <img src="Pokemon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}