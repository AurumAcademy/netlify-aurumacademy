import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import BioCards from '../components/Bios/BioCards'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.title}>
      <div className='hero is-medium is-accent'>
        <div className='hero-body has-align-bottom'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                  <h1 className='is-size-1 has-text-weight-semibold  is-align-bottom'>
                    {post.frontmatter.title}
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <HTMLContent content={post.html} />
              <BioCards names={post.frontmatter.bios}/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutPage 

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        bios
      }
    }
  }
`
