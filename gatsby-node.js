const path = require('path');
const createPaginatedPages = require('gatsby-paginate');
const { postSlug } = require('./src/utils/helpers');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post/index.js');
    const resourcePageTemplate = path.resolve('src/templates/resource-page.js');

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
                    excerpt(pruneLength: 750)
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
          allFile {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    path
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

        // Create page for each blog post
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

        // Create Resource pages
        result.data.allFile.edges.forEach(
          ({
            node: {
              childMarkdownRemark: {
                frontmatter: { path: sitePath },
              },
            },
          }) => {
            createPage({
              path: sitePath,
              component: resourcePageTemplate,
              content: {
                path: sitePath,
              },
            });
          },
        );

        // Create Blog Index
        createPaginatedPages({
          edges: result.data.allContentfulBlogPost.edges,
          createPage,
          pageTemplate: 'src/templates/blog-index/index.js',
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
