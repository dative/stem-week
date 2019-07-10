import React from 'react'
import emergence from 'emergence.js'

import Header from 'components/header'
import EventsViewer from 'components/eventsViewer'
import Sidebar from 'components/sidebar'
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
        <div className="container main-container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <EventsViewer />
            </div>
            <div className="col-12 col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
