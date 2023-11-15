/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from '../page.module.css';

export default function header(){
    return(
        <div className={styles.header}>
            <img src="/Vector.svg" alt="icone" />
            <div className={styles.pesquisa}>
                <input type="text" placeholder='Pesquisar Pokémon' />
                <img src="Button.svg" alt="Ícone de busca" className={styles.img}></img>
            </div>
        </div>
    )
}