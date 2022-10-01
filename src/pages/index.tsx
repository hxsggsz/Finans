import type { NextPage } from 'next'
import Head from 'next/head'
import { GlobalStyle } from '../theme/Global'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Finans</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>
        <GlobalStyle />
        <h1>hello next</h1>
      </div>
    </div>
  )
}

export default Home
