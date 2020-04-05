import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Plans from '../components/Plans'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter)

  return (
    <Layout hideLogo={true}>
      {/* <section className='hero is-accent is-fullheight'> */}
      <section className='hero is-accent is-medium'>
        <div className='half-triangle'></div>
        <img className='main-logo' src='img/logo.png' alt='Aurum Academy'></img>
        <div className='hero-body'>
          <div className='container'>
              <div className='columns'>
                <div className='column'></div>
                <div className='column is-two-thirds'>

                  {/* <div className='hero-card'>
                    <div className='section'>
                      <h1 className='is-size-1'>We are very cool</h1>
                      <h2 className='is-size-2'>Just believe it</h2>
                    </div>
                  </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section no-pad-bot'>
        <Plans data={frontmatter.classes}></Plans>
      </section>

      <section className='section has-text-centered'>
        <div className='container'>
          <h1 className='is-size-1 is-accent-text'>{frontmatter.register[0].text}</h1>
          <Link className='button is-primary is-large' to='/register'>{frontmatter.register[0].button}</Link>
        </div>
      </section>


    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
        blurbs {
          title
          image
          text
        }
        classes {
          name
          image
          text
          items
        }
        register {
          text
          button
        }
      }
    }
  }
`
