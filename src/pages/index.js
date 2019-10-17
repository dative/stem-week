import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/meta'
import Layout from 'components/layout'
import EventsViewer from 'components/eventsViewer'
import Sidebar from 'components/sidebar'

class PageIndex extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.siteMetadata')} />
        <div className="container main-container">
          <div className="row">
            <div className="col-12 col-lg-9">
              <EventsViewer events={get(data, 'allCommunityEvent.edges')} />
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
    allCommunityEvent {
      edges {
        node {
          id
          title
          allDay
          endDate
          eventAddress {
            address
            city
            state
            zipcode
          }
          eventUrl
          eventWhere
          grade
          hostedBy
          openToThePublic
          slug
          startDate
          study
          geolocation {
            lat
            lng
          }
          summary
          contact {
            email
            name
            organization
            phone
          }
          picture
        }
      }
    }
  }
`
