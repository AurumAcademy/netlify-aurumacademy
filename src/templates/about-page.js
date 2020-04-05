import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import BioCard from '../components/BioCard'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.title}>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <HTMLContent content={post.html} />
              <section className='section'>
                {
                  post.frontmatter.bios.map((bio) => {
                    return <BioCard data={bio} />
                  })
                }
              </section>
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
        bios {
          name
          image
          text
        }
      }
    }
  }
`
