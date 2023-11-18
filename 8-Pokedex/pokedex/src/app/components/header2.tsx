/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image'
import styles from '../page.module.css';

export default function header2(){
    return(
        <div className={styles.header}>
            <img src="/Vector.svg" alt="icone" />
        </div>
    )
}