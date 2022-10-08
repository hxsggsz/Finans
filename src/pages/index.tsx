import Head from 'next/head'
import type { NextPage } from 'next'
import { GlobalStyle } from '../theme/Global'
import { Header } from '../components/header/Header'
import { Content } from '../components/content/Content'
import { Footer } from '../components/footer/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Finans</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>
        <GlobalStyle />
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default Home
