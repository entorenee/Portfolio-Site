import React, { Component } from 'react'

import Layout from '../layouts/main'
import About from '../components/about'
import Work from '../components/work'
import Contact from '../components/contact'

class IndexPage extends Component {
  constructor() {
    super()
    this.scrollToHash = this.scrollToHash.bind(this)
  }

  componentDidMount() {
    setTimeout(this.scrollToHash, 0)
  }

  scrollToHash() {
    const hash = window.location.hash.substring(1)
    if (hash) {
      this[hash].scrollIntoView()
      window.scrollBy(0, -80)
    } else {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <Layout>
        <About
          inputRef={el => {
            this.about = el
          }}
        />
        <Work
          inputRef={el => {
            this.work = el
          }}
        />
        <Contact
          inputRef={el => {
            this.contact = el
          }}
        />
      </Layout>
    )
  }
}

export default IndexPage
