import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import Body from './components/body'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Body />
    </main>
  )
}
