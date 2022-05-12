import React from 'react'

import Layout from '../layouts/main'
import About from '../components/about'
import Contact from '../components/contact'
import HomepageBlogList from '../components/blog-excerpts/homepage-blog-list'

const IndexPage = (): JSX.Element => (
  <Layout>
    <About />
    <HomepageBlogList />
    <Contact />
  </Layout>
)

export default IndexPage
