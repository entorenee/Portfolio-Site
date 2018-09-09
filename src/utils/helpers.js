const slugify = require('slugify');

exports.postSlug = (date, title) => {
  const titleSlug = slugify(title, {
    remove: /[^A-Za-z0-9\s]+/,
    lower: true,
  });
  return `blog/${date}/${titleSlug}`;
};
