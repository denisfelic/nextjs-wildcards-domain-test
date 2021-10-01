import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ fullUrl }: any) => {

  let url: string = fullUrl.split('.')[0];
  return (
    <div className={styles.container}>
      <p>FullUrl: {fullUrl}</p>
      <p>Subdomain: {url}</p>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const req = ctx.req;
  let fullUrl
  if (req) {
    // Server side rendering
    fullUrl = req.headers.host?.split(':')[0];
  } else {
    // Client side rendering
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }
  return { fullUrl: fullUrl }
}

export default Home
