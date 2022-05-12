import { GatsbyBrowser } from 'gatsby'
import axe from 'react-axe'
import React from 'react'
import ReactDOM from 'react-dom'

export const replaceHydrateFunction: GatsbyBrowser['replaceHydrateFunction'] =
  () => {
    return (element, container, callback) => {
      if (process.env.NODE_ENV !== 'production') {
        axe(React, ReactDOM, 1000)
      }
      ReactDOM.render(element, container, callback)
    }
  }
