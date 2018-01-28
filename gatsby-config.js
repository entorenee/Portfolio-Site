module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
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
    }
  ]
};
