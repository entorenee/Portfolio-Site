import React from 'react'
import { Link } from 'gatsby'

type Props = {
  test: boolean
  text: string
  url: string
}

const BlogNavLink = ({ test, text, url }: Props): JSX.Element | null => {
  return !test ? <Link to={url}>{text}</Link> : null
}

export default BlogNavLink
