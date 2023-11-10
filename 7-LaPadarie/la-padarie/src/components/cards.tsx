import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../app/page.module.css';


export default function cards({nClients}){
    //chamando a rota que retorna a soma dos paes vendidos
    const [soma, setSoma] = useState(0);
    const valorPao = 0.5;

    useEffect(() => {
        axios.get('http://localhost:3000/api/somaPaes')
          .then(res => {
            setSoma(res.data);
          })
          .catch(err => console.error(err));
        }, [soma]);

    return(
        <div className={styles.headerSection}>
            <div className={styles.pessoasFila}>
            <div className={styles.textos}>
                <p>Pessoas na fila</p>
                <h2>{nClients}</h2>
            </div>
            <img src="\logo\Icon.svg" alt="" />
            </div>
            <div className={styles.paesVendidos}>
            <div className={styles.textos}>
                <p>Pães vendidos</p>
                <h2>{soma.total || "0"}</h2>
            </div>
            <img src="\logo\Group 1.svg" alt="" />
            </div>
            <div className={styles.entrada}>
            <div className={styles.textos}>
                <p>Entrada</p>
                <h2>R$ {soma.total * valorPao || "0.00"}</h2>
            </div>
            <img src="\logo\Group 2.svg" alt="" />
            </div>
        </div>
    )
}