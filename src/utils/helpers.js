const slugify = require('slugify')
const { format } = require('date-fns')

const postSlug = (date, title) => {
  const urlDate = date.replace(/-/g, '/')
  const titleSlug = slugify(title, {
    remove: /[^A-Za-z0-9\s]+/,
    lower: true,
  })
  return `/blog/${urlDate}/${titleSlug}`
}

const longDateFormat = date => format(date, 'MMMM D, YYYY')

module.exports = {
  longDateFormat,
  postSlug,
}
