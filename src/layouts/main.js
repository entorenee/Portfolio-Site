// @flow
import * as React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'

import favicon from './favicon-32x32.png'
import Footer from '../components/footer'
import Header from '../components/header'
import themeUtils from '../components/theme-utils'

type Props = {
  children: React.ChildrenArray<React.Node>,
}

const styles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${themeUtils.baseColor};
  }

  a {
    color: ${themeUtils.mediumAccent};
    transition: color 800ms;
    text-decoration: underline;
  }

  a:hover {
    color: ${themeUtils.complementaryDark};
  }
`

const description =
  'Daniel Lemay is a full stack JavaScript developer, based out of Portland Oregon, specializing in responsive web applications using cutting edge technologies.'
const url = typeof window !== 'undefined' ? window.location.href : undefined
const title = 'Daniel Lemay | JavaScript Developer'

const TemplateWrapper = ({ children }: Props) => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@dslemay' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='javascript, web development, developer, Portland, Oregon, front-end, full stack, back-end, react' // eslint-disable-line max-len
      />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <link rel='icon' type='image/png' href={favicon} />
    </Helmet>
    <Global styles={styles} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default TemplateWrapper
