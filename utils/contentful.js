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

export async function fetchContentfulEntry (id) {
  const entry = await client.getEntry(id)

  if (entry.fields) return entry.fields
  console.log(`Error getting Entry with ID: ${id}.`)
}
