import { fetchContentfulEntries } from '../../utils/contentfulPosts'

export default function Home({ posts }) {
    return (
        <div>
            Listening
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetchContentfulEntries('reading')
    const posts = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            posts
        },
    }
}
