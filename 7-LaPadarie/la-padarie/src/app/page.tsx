/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from './page.module.css';
import { useState } from 'react';





export default function Home() {

  const [visivel, setVisivel] = useState(false);

  const handleClick = () => {
    setVisivel(!visivel);
  };

  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <img src="\logo\Logo.svg" alt=""/>
        </header>
        <section className={styles.sec}>
          <div className={styles.headerSection}>
            <div className={styles.pessoasFila}>
              <p>Pessoas na fila</p>
              <img src="\logo\Icon.svg" alt="" />
            </div>
            <div className={styles.paesVendidos}>
              <p>Pães vendidos</p>
              <img src="\logo\Group 1.svg" alt="" />
            </div>
            <div className={styles.entrada}>
              <p>Entrada</p>
              <img src="\logo\Group 2.svg" alt="" />
            </div>
          </div>
          <div className={styles.pessoasNaFila}>
            <p className={styles.adicionarPessoas} onClick={handleClick}><strong>+ Adicionar pessoas a fila</strong></p>
            <div className={styles.parteBranca}>
              <div className={styles.cliente}>
                <p ><strong>nome cliente</strong>
                </p>
                <div className={styles.paes}>
                  <p><strong>Total de pães:</strong> possivel dado</p>
                  <p><strong>Total a pagar:</strong> outro possivel dado</p>
                </div>
              </div>
              <div>
                <img src="\logo\Icon (1).svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.rodape}>
          Com 💛 Info Jr UFBA 2022
        </footer>
      </main>
      {visivel && (
        <div className={styles.fundo} id='fundo'>
          <div className={styles.modal}>
            <strong>Adicionar pessoas a fila</strong>
            <div className={styles.inputs}>
              <input className={styles.inp} type="text" placeholder='Nome completo do cliente: '/>
              <input className={styles.inp} type="number" placeholder='Total de pães: '/>
            </div>
            <div className={styles.botoes}>
              <button className={styles.but2}>Enviar</button>
              <button className={styles.but} onClick={() => setVisivel(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
  </>
  )
}






