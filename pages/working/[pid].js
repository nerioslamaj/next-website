import React from 'react'
import { fetchContentfulEntries, fetchContentfulEntry } from '../../utils/contentful'

export const WorkItem = post => {
  return (
    <div className='PortfolioItem'>
      {JSON.stringify(post)}
    </div>
  )
}

export async function getStaticPaths () {
  const res = await fetchContentfulEntries('portfolio')
  const posts = await res
  const paths = posts.map((post) => ({
    params: { pid: post.sys.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const res = await fetchContentfulEntry(params.pid)
  const post = await res

  return { props: { post } }
}

export default WorkItem
