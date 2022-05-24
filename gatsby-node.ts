import path from 'path'

import { GatsbyNode } from 'gatsby'
// @ts-ignore
import createPaginatedPages from 'gatsby-paginate'

import postSlug from './src/utils/post-slug'
import { CATEGORY_BASE, TAG_BASE } from './src/templates/blog-post/url-base'

export const createPages: GatsbyNode['createPages'] = ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post/index.tsx')
    const resourcePageTemplate = path.resolve('src/templates/resource-page.tsx')

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
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create page for each blog post
        // @ts-ignore
        result.data.allContentfulBlogPost.nodes.forEach(
          // @ts-ignore
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
        // @ts-ignore
        result.data.allFile.nodes.forEach(
          ({
            childMarkdownRemark: {
              // @ts-ignore
              frontmatter: { path: sitePath },
            },
          }) => {
            createPage({
              path: sitePath,
              component: resourcePageTemplate,
              // @ts-ignore
              content: {
                path: sitePath,
              },
            })
          },
        )

        // Create Blog Index
        createPaginatedPages({
          // @ts-ignore
          edges: result.data.allContentfulBlogPost.nodes,
          createPage,
          pageTemplate: 'src/templates/blog-index/index.tsx',
          pageLength: 5,
          pathPrefix: 'blog',
          buildPath: (index: number, pathPrefix: string) =>
            index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
          context: {
            headline: 'Blog Index',
          },
        })

        // Create Category Pages
        // @ts-ignore
        result.data.allContentfulCategories.nodes.forEach(
          // @ts-ignore
          ({ category, slug, blog_post: posts }) => {
            if (Array.isArray(posts)) {
              createPaginatedPages({
                edges: posts,
                createPage,
                pageTemplate: 'src/templates/blog-index/index.tsx',
                pageLength: 5,
                pathPrefix: `${CATEGORY_BASE}/${slug}`,
                buildPath: (index: number, pathPrefix: string) =>
                  index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
                context: {
                  headline: `Category: ${category}`,
                },
              })
            }
          },
        )

        // Create Tag Pages
        // @ts-ignore
        result.data.allContentfulTags.nodes.forEach(
          // @ts-ignore
          ({ tag, slug, blog_post: posts }) => {
            if (Array.isArray(posts)) {
              createPaginatedPages({
                edges: posts,
                createPage,
                pageTemplate: 'src/templates/blog-index/index.tsx',
                pageLength: 5,
                pathPrefix: `${TAG_BASE}/${slug}`,
                buildPath: (index: number, pathPrefix: string) =>
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

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'ContentfulBlogPost') {
    const { postDate, title } = node
    // @ts-ignore
    const slug = postSlug(postDate, title)

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
