import React from 'react'
import { fetchContentfulEntries } from '../../utils/contentfulPosts'

export default function Listening ({ posts }) {
  return (
    <div>
      Listening
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetchContentfulEntries('listening')
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts
    }
  }
}
