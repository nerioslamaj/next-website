const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

const getContentfulEntries = (model) => client.getEntries({ content_type: model })

export async function fetchPortfolioEntries() {
  const entries = await getContentfulEntries('portfolio')

  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchMenuEntries() {
  const entries = await getContentfulEntries('menu')

  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchLandingPage() {
  const entries = await getContentfulEntries('landing')

  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}
