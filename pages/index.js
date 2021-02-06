import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hidden Webapp</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/agustim/test-action-hidden-directory">test for action-hidden-directory!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://github.com/agustim/action-hidden-directory" className={styles.card}>
            <h3>Acction &rarr;</h3>
            <p>Action user.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/agustim">Power by agustim</a>
      </footer>
    </div>
  )
}
