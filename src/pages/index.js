import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/meta'
import Layout from 'components/layout'
import EventsViewer from 'components/eventsViewer'
import Sidebar from 'components/sidebar'

class PageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://capecodstemnetwork.org/communityEvents.json`
      )

      const json = await response.json()

      this.setState({ events: json.data })
    } catch (e) {
      console.log('Error: ', e)
    }
  }

  render() {
    const { data, location } = this.props
    console.log(this.state.events)
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.siteMetadata')} />
        <div className="container main-container">
          <div className="row">
            <div className="col-12 col-lg-9">
              <EventsViewer events={this.state.events} />
            </div>
            <div className="col-12 col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      id
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
