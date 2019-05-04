// @flow
import * as React from 'react'

type Props = {
  children: React.ChildrenArray<React.Node>,
}

const TemplateWrapper = ({ children }: Props) => <div>{children}</div>

export default TemplateWrapper
