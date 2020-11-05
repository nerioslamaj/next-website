import React from 'react'
import { fetchContentfulEntries } from '../../utils/contentfulPosts'

export default function Writing ({ posts }) {
  return (
    <div>
      Writing
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetchContentfulEntries('writing')
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts
    }
  }
}
