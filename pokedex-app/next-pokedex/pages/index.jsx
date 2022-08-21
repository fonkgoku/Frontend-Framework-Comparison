import Head from 'next/head'
import Grid from '../components/Grid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Grid items={[1, 1, 1, 1, 1]} />
      </main>
    </>
  )
}
