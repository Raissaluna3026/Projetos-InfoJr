"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import Body from './components/body'
import axios from 'axios';
import Login from './components/login';

export default function Home() {

  return (
    <main className={styles.main}>
      
      <Body/>
      <Login />
    </main>
  )
  
}
