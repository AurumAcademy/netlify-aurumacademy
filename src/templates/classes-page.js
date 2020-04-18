import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Plans from '../components/Plans/Plans'
import ClassCards from '../components/Classes/ClassCards'
import ClassFlow from '../components/Classes/ClassFlow'

const ClassesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title={post.frontmatter.title}>
      <div className='hero is-medium is-accent'>
        <div className='hero-body has-align-bottom'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                  <h1 className='is-size-1 has-text-weight-semibold  is-align-bottom has-text-centered'>
                    {post.frontmatter.title}
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='section'>
        <div className='content container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <HTMLContent content={post.html} />

              <section className='section no-pad-bottom'>
                <h1 className='has-text-centered has-text-accent'>
                  Class Prequisites
                </h1>
                <hr/>
                <ClassFlow/>
              </section>

              <section className='section no-pad-top'>
                <h1 className='has-text-centered has-text-accent'>
                  Class List
                </h1>
                <hr/>
                <ClassCards/>
              </section>

              <section className='section'>
                <h1 className='has-text-centered has-text-accent'>
                  Suggested Pathways
                </h1>
                <hr/>
                <Plans/>
              </section>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ClassesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ClassesPage 

export const pageQuery = graphql`
  query ClassesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
