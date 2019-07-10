import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/meta'
import Layout from 'components/layout'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
    </Layout>
  )
}

export default BlogIndex

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
