const { postSlug } = require('./src/utils/helpers');

module.exports = {
  siteMetadata: {
    title: 'Daniel Lemay Blog',
    description:
      'Daniel Lemay is a full stack JavaScript developer based in Portland, OR and concentrating on cutting edge technologies.',
    siteUrl: 'http://dslemay.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '024qyvhyq0tv',
        accessToken: '4d263766bb6101d57642e0e5a3aa85f3f5d98a7c055f221fc4ff52be8aeb059f'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-99838315-1'
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map(edge => {
                const { title, postDate } = edge.node;
                const { html } = edge.node.body.childMarkdownRemark;
                return Object.assign(
                  {},
                  {
                    title,
                    url: `${site.siteMetadata.siteUrl}/${postSlug(postDate, title)}`,
                    guid: `${site.siteMetadata.siteUrl}/${postSlug(postDate, title)}`,
                    custom_elements: [{ 'content-encoded': html }]
                  }
                );
              }),
            query: `
              {
                allContentfulBlogPost(limit: 500, sort: { fields: [postDate], order: DESC }) {
                  edges {
                    node {
                      title
                      postDate(formatString: "YYYY/MM/DD")
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          }
        ]
      }
    }
  ]
};
