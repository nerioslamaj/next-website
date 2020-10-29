import Head from 'next/head'

import { fetchContentfulEntries } from '../utils/contentfulPosts'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Home({ menuItems }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
      </main>

      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchContentfulEntries('menu')
  const menuItems = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      menuItems,
    },
  }
}
