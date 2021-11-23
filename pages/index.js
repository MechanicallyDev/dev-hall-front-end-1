import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Freela</title>
        <meta
          name='description'
          content='Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seusu clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Navbar />

      <Hero>
        <h2>Desenvolvedores prontos para ação</h2>
        <h3>
          Seu projeto pronto <wbr />
          na velocidade da luz
        </h3>
        <a href="#Contato">Peça uma reunião</a>
      </Hero>

      <Info>
        <h3>Nossa iniciativa</h3>
        <p>
          Somos desenvolvedores que se dedicam a fazer projetos perfeitos e
          entregar valor para todos os seus clientes. Gostamos de ver clientes
          satisfeitos com projetos feitos com carinho, atenção e qualidade
          altíssima.
        </p>
      </Info>
      <Contact/>
      <Footer/>
    </>
  )
}
