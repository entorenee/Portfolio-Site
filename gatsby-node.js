const path = require('path');
const createPaginatedPages = require('gatsby-paginate');
const { postSlug } = require('./src/utils/helpers');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/BlogPost.js');
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 500, sort: { fields: [postDate], order: DESC }) {
            edges {
              node {
                id
                title
                postDate(formatString: "YYYY/MM/DD")
                body {
                  childMarkdownRemark {
                    html
                  }
                }
                headlineImage {
                  description
                  file {
                    url
                  }
                }
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
              id: edge.node.id,
            },
          });
        });

        createPaginatedPages({
          edges: result.data.allContentfulBlogPost.edges,
          createPage,
          pageTemplate: 'src/templates/BlogIndex.js',
          pageLength: 5,
          pathPrefix: 'blog',
          // eslint-disable-next-line no-confusing-arrow
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
        });
      }),
    );
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  const pageExport = page;

  return new Promise(resolve => {
    if (page.path.match(/^\/projects/)) {
      pageExport.layout = 'projects';

      createPage(pageExport);
    }

    resolve();
  });
};
