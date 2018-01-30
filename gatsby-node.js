const path = require('path');
const { postSlug } = require('./src/utils/helpers');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/BlogPost.js');
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 100) {
            edges {
              node {
                title
                postDate(formatString: "YYYY/MM/DD")
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allContentfulBlogPost.edges.forEach(edge => {
          const { title, postDate } = edge.node;
          const slug = postSlug(postDate, title);
          createPage({
            path: slug,
            component: blogPostTemplate,
            context: {
              id: edge.node.id
            }
          });
        });
      })
    );
  });
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const pageExport = page;

  return new Promise(resolve => {
    if (page.path.match(/^\/projects/)) {
      pageExport.layout = 'projects';

      createPage(pageExport);
    }

    resolve();
  });
};
