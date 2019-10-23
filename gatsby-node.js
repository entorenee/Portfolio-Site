const path = require('path')

const createPaginatedPages = require('gatsby-paginate')

const postSlug = require('./src/utils/post-slug')
const {
  CATEGORY_BASE,
  TAG_BASE,
} = require('./src/templates/blog-post/url-base')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post/index.js')
    const resourcePageTemplate = path.resolve('src/templates/resource-page.js')

    resolve(
      graphql(`
        fragment BlogPost on ContentfulBlogPost {
          id
          title
          postDate(formatString: "MMMM D, YYYY")
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 750)
            }
          }
          headlineImage {
            title
            file {
              url
            }
          }
          fields {
            slug
          }
        }
        {
          allContentfulBlogPost(
            limit: 500
            sort: { fields: [postDate], order: DESC }
          ) {
            nodes {
              ...BlogPost
            }
          }
          allContentfulCategories {
            nodes {
              category
              slug
              blog_post {
                ...BlogPost
              }
            }
          }
          allContentfulTags {
            nodes {
              tag
              slug
              blog_post {
                ...BlogPost
              }
            }
          }
          allFile(filter: { sourceInstanceName: { eq: "resource-pages" } }) {
            nodes {
              childMarkdownRemark {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create page for each blog post
        result.data.allContentfulBlogPost.nodes.forEach(
          ({ id, fields: { slug } }) => {
            createPage({
              path: slug,
              component: blogPostTemplate,
              context: {
                id,
              },
            })
          },
        )

        // Create Resource pages
        result.data.allFile.nodes.forEach(
          ({
            childMarkdownRemark: {
              frontmatter: { path: sitePath },
            },
          }) => {
            createPage({
              path: sitePath,
              component: resourcePageTemplate,
              content: {
                path: sitePath,
              },
            })
          },
        )

        // Create Blog Index
        createPaginatedPages({
          edges: result.data.allContentfulBlogPost.nodes,
          createPage,
          pageTemplate: 'src/templates/blog-index/index.js',
          pageLength: 5,
          pathPrefix: 'blog',
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
          context: {
            headline: 'Blog Index',
          },
        })

        // Create Category Pages
        result.data.allContentfulCategories.nodes.forEach(
          ({ category, slug, blog_post: posts }) => {
            if (Array.isArray(posts)) {
              createPaginatedPages({
                edges: posts,
                createPage,
                pageTemplate: 'src/templates/blog-index/index.js',
                pageLength: 5,
                pathPrefix: `${CATEGORY_BASE}/${slug}`,
                buildPath: (index, pathPrefix) =>
                  index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
                context: {
                  headline: `Category: ${category}`,
                },
              })
            }
          },
        )

        // Create Tag Pages
        result.data.allContentfulTags.nodes.forEach(
          ({ tag, slug, blog_post: posts }) => {
            if (Array.isArray(posts)) {
              createPaginatedPages({
                edges: posts,
                createPage,
                pageTemplate: 'src/templates/blog-index/index.js',
                pageLength: 5,
                pathPrefix: `${TAG_BASE}/${slug}`,
                buildPath: (index, pathPrefix) =>
                  index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
                context: {
                  headline: `Tag: ${tag}`,
                },
              })
            }
          },
        )
      }),
    )
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  const pageExport = page

  return new Promise(resolve => {
    if (page.path.match(/^\/projects/)) {
      pageExport.layout = 'projects'

      createPage(pageExport)
    }

    resolve()
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'ContentfulBlogPost') {
    const { postDate, title } = node
    const slug = postSlug(postDate, title)

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
