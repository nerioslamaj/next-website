const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken
})

export async function fetchContentfulEntries (model) {
  const entries = await client.getEntries({ content_type: model })

  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${model}.`)
}