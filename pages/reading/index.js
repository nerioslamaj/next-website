import React from 'react'
import { fetchContentfulEntries } from '../../utils/contentful'

export default function Reading ({ posts }) {
  return (
    <div>
      Reading
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetchContentfulEntries('reading')
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts
    }
  }
}
