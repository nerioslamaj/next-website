import { fetchContentfulEntries } from '../../utils/contentfulPosts'
import Post from '../../components/WorkingItem/WorkingItem'

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
    const res = await fetchContentfulEntries('portfolio')
    const posts = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            posts,
        },
    }
}
