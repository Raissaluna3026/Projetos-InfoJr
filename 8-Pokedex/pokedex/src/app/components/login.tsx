/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import styles from '../page.module.css';
import axios from 'axios';



export default  function Login() {

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:3000/api/usuarios')
    .then(res => {
      setUsuario(res.data);
    })
    .catch(err => console.error(err));
  }, []);
  console.log(usuario)


    const [visivel, setVisivel] = useState(true);

    const handleClick = () => {
        setVisivel(!visivel);
    };



    return (
        <>
        {/* {visivel && (
        <main className={styles.main}>
            <form className={styles.modal} >
                <strong>POKEDEX - LOGIN</strong>
                <div className={styles.inputs}>
                    <input className={styles.inp} type="text" placeholder='Login: ' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input className={styles.inp} type="text" placeholder='Senha: ' value={totalPaes} onChange={(e) => setTotalPaes(Number(e.target.value))}/>
                </div>
                <div className={styles.botoes}>
                    <button className={styles.but2} type="submit" onClick={() => createClient(nome, totalPaes)}>Entrar</button>
                    <button className={styles.but} onClick={() => setVisivel(false)}>Cadastrar</button>
                </div>
                </form>
        </main>
      )}   */}
    </>
    )
  }