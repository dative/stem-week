import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div className="container">
        <div className="row">
          <div className="col col-lg-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            tempore excepturi veritatis amet nobis vitae impedit animi,
            similique accusantium. Assumenda possimus ut, voluptatem repudiandae
            quis corrupti. Sunt obcaecati voluptate non?
          </div>
        </div>
      </div>
      {/* {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))} */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
