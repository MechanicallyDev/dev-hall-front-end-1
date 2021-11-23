import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Freela</title>
        <meta
          name='description'
          content='Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seusu clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        Hello world!!!
      </main>
    </div>
  )
}
