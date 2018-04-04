# Portfolio site

This project is the source code for my portfolio site which can be found at https://www.dslemay.com. The project is built using [Gatsby](https://www.gatsbyjs.org), a static site generator which allows the developer to have all the benefits of coding in React while maintaining benefits of static HTML and asset files on build time.

The site utilized GraphQL to interact with Contentful, a headless CMS service, and pull all applicable data and assets to generate the blog posts at build time. Additionally, webhooks allow for the site to be rebuilt upon pushing code to the repository and when a post is created, updated, or deleted on Contentful. 
