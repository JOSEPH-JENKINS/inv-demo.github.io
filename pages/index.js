import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar/index'
import CardGroup from '../components/Cards/CardGroup'
import Card from '../components/Cards/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="An Investment platform" />
        <meta name="viewport" content='width=device-width; initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sidebargroup}>
        <Sidebar />
      </div>
      <div className={styles.cardssection}>
        <h1 className={styles.cardssectionhead}>Investment opportunities</h1>
        <CardGroup>
          <Card />
          <Card />
          <Card />
        </CardGroup>
      </div>
    </div>
  )
}
