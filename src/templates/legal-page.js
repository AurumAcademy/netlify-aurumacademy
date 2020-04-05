import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const LegalPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.title}>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
                {post.title}
              </h1>
              <HTMLContent content={post.html} />
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

LegalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default LegalPage 

export const pageQuery = graphql`
  query LegalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        meta_title
        meta_description
      }
    }
  }
`
