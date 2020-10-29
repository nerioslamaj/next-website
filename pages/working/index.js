import { fetchPortfolioEntries } from '@utils/contentfulPosts'
import Post from '@components/Post'

export default function Home({ posts }) {
    return (
        <div className="container">
            <div className="posts">
                {posts.map((p) => {
                    return <Post key={p.id} title={p.miniTitle} image={p.thumbnail.fields} subtitle={p.miniSubtitle} />
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetchPortfolioEntries()
    const posts = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            posts,
        },
    }
}
