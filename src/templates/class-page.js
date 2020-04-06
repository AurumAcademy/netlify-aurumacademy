import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import BioCard from '../components/BioCard'

const ClassPage = ({ data }) => {

  console.log(data)

  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.title}>
      <div className='hero is-medium is-accent'>
        <div className='hero-body has-align-bottom'>
            <h1 className='is-size-1 has-text-weight-semibold has-text-centered has-text-accent is-align-bottom'>
              {post.frontmatter.title}
            </h1>
        </div>
      </div>

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

ClassPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ClassPage

export const pageQuery = graphql`
  query ClassPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        bios {
          name
          image
          links {
            label
            image
            link
          }
          text
        }
      }
    }
  }
`
