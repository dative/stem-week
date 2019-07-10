import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Meta from 'components/meta'
import Layout from 'components/layout'
import Page from 'templates/page'

const Template = ({ data, location }) => (
  <div>
    <Layout location={location}>
      <Meta
        title={get(data, 'post.frontmatter.title')}
        site={get(data, 'site.meta')}
      />
      <Page {...this.props} />
    </Layout>
  </div>
)
export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
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
