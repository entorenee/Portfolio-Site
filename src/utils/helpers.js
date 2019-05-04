const slugify = require('slugify')
const { format } = require('date-fns')

const postSlug = (date, title) => {
  const titleSlug = slugify(title, {
    remove: /[^A-Za-z0-9\s]+/,
    lower: true,
  })
  return `blog/${date}/${titleSlug}`
}

const longDateFormat = date => format(date, 'MMMM D, YYYY')

module.exports = {
  longDateFormat,
  postSlug,
}
