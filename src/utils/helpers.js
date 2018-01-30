const slugify = require('slugify');

// Return if enter or spacebar was pressed for accessible keyboard handling
exports.keyboardHandler = e => e.which === 13 || e.which === 32;

exports.postSlug = (date, title) => {
  const titleSlug = slugify(title, {
    remove: /[^A-Za-z0-9\s]+/,
    lower: true
  });
  return `blog/${date}/${titleSlug}`;
};
