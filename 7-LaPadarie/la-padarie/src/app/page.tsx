/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import Cards from '@/components/cards';
import Fila from '@/components/fila';




export default function Home() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/fila')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  return (
    
    <main className={styles.main}>
      <header className={styles.header}>
        <img src="\logo\Logo.svg" alt=""/>
      </header>
      <section className={styles.sec}>

        <Cards />
        <Fila />
        
      </section>
      <footer className={styles.rodape}>
        Com 💛 Info Jr UFBA 2022
      </footer>
    </main>

  )
}