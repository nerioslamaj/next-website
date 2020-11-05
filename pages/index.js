import React from 'react'
import Head from 'next/head'
import { fetchContentfulEntries } from '../utils/contentfulPosts'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Shader from '../components/Shader/Shader'

export default function Home ({ menuItems }) {
  return (
    <div className='container'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#000000' />
        <meta property='og:title' content='Nerios Lamaj - Portfolio Website' />
        <meta property='og:description' content='Nerios Lamaj - Portfolio Website' />
        <meta property='og:image' content='https://nerios.dev/thumbnail.jpg' />
        <meta property='og:url' content='https://nerios.dev' />
        <meta property='og:site_name' content='Nerios Lamaj - Portfolio Website' />
        <meta name='twitter:image:alt' content='Nerios Lamaj - Portfolio Website' />
        <meta name='twitter:site' content='@nerioslamaj' />
        <link rel='manifest' href='/manifest.json' />
        <title>Nerios Lamaj - Personal Portfolio</title>
      </Head>

      <main>
        <Header logo={menuItems.logo.fields} items={menuItems.menuItems} />
      </main>

      <Shader />

      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetchContentfulEntries('menu')
  const menuItems = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      menuItems: menuItems[0]
    }
  }
}
