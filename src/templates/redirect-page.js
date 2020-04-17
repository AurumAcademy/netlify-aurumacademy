import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const RedirectPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.metaTitle}>
      <section className='hero is-accent is-full-height'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section is-centered content is-large has-text-dark'>
                  <h1 className='has-text-accent'>{post.frontmatter.title}</h1>
                  <HTMLContent content={post.html}/>
                  <Link to="/">Return to home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

RedirectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RedirectPage 

export const pageQuery = graphql`
  query RedirectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        metaTitle
        title
      }
    }
  }
`
