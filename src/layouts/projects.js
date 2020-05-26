// @flow
import * as React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  children: React.ChildrenArray<React.Node>,
}

const TemplateWrapper = ({ children }: Props) => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }} />
    <main>{children}</main>
  </>
)

export default TemplateWrapper
