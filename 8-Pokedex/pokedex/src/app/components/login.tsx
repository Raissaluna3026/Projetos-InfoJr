/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import styles from '../page.module.css';
import axios from 'axios';
import Body from "./body";
import Body2 from "./body2";



export default  function Login() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:3000/api/usuarios')
    .then(res => {
      setUsuarios(res.data);
    })
    .catch(err => console.error(err));
  }, []);
  console.log(usuarios)


  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

    const logarClick = (login: string, senha: string) => {
      for (var i in usuarios){
        if (usuarios[i].login==login && usuarios[i].senha==senha){
          setVisivel(!visivel);
          console.log('usuario logado')
          return
        }
      }
      alert("usuário não encontrado")
    };


    const [visivel, setVisivel] = useState(true);

    const handleClick = () => {
        setVisivel(!visivel);
    };



    return (
        <>
        <Body login={login}/>
        <Body2 login={login}/>
        {visivel && (
        <main className={styles.main2}>
            <form className={styles.modal} >
                <strong>POKEDEX - LOGIN</strong>
                <div className={styles.inputs}>
                    <input className={styles.inp} type="text" placeholder='Login: ' value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input className={styles.inp} type="text" placeholder='Senha: ' value={senha} onChange={(e) => setSenha((e.target.value))}/>
                </div>
                <div className={styles.botoes}>
                    <button className={styles.but2} type="submit" onClick={() => logarClick(login, senha)}>Entrar</button>
                    
                </div>
                </form>
        </main>
      )}   
    </>
    )
  }