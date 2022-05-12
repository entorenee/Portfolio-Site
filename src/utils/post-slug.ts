import slugify from 'slugify'

// Used for page generation in gatsby-node
const postSlug = (date: string, title: string): string => {
  const urlDate = date.replace(/-/g, '/')
  const titleSlug = slugify(title, {
    remove: /[^A-Za-z0-9\s]+/,
    lower: true,
  })
  return `/blog/${urlDate}/${titleSlug}`
}

export default postSlug;
