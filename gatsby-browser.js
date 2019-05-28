const axe = require('react-axe')
const React = require('react')
const ReactDOM = require('react-dom')

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    if (process.env.NODE_ENV !== 'production') {
      axe(React, ReactDOM, 1000)
    }
    ReactDOM.render(element, container, callback)
  }
}
