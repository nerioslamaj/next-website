import React from 'react'
import { fetchContentfulEntries } from '../../utils/contentful'
import WorkingItem from '../../components/WorkingItem/WorkingItem'

export default function Working ({ posts }) {

  return (
    <div className='container'>
      <div className='posts'>
        {posts.map((post) => {
          return (
            <WorkingItem
              key={post.sys.id}
              postId={post.sys.id}
              title={post.fields.miniTitle}
              image={post.fields.thumbnail.fields}
              subtitle={post.fields.miniSubtitle}
            />
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const posts = await fetchContentfulEntries('portfolio')

  return {
    props: {
      posts
    }
  }
}
