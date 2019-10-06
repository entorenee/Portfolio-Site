const slugify = require('slugify')

// Used for page generation in gatsby-node
const postSlug = (date, title) => {
  const urlDate = date.replace(/-/g, '/')
  const titleSlug = slugify(title, {
    remove: /[^A-Za-z0-9\s]+/,
    lower: true,
  })
  return `/blog/${urlDate}/${titleSlug}`
}

module.exports = postSlug
