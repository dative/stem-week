import React from 'react'
import emergence from 'emergence.js'

import Header from 'components/header'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import './style.scss'
class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header title={siteMetadata.title} {...this.props} />
        {children}
      </div>
    )
  }
}

export default Layout
