import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Classes from '../components/Classes/Classes'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout hideLogo={true}>
      <section className='hero is-accent is-stagnant has-background'>
        <img className='hero-background is-transparent' src={frontmatter.image} />
        <div className='top-triangle is-left'></div>
        <img className='main-logo' src='img/logo.png' alt='Aurum Academy'></img>
        <div className='is-position-relative is-align-bottom has-medium-padding  has-text-white has-text-right has-text-accent small-line-height'>
          <h1 className='is-size-1 has-text-weight-semibold'>{frontmatter.hero[0].title}</h1>
          <h2 className='is-size-2'>{frontmatter.hero[0].subtitle}</h2>
        </div>
      </section>

      <section className='section no-pad-bot'>
        <Classes names={frontmatter.classes}/>
      </section>

      <section className='section has-text-centered'>
        <div className='container'>
          <h1 className='is-size-1 has-text-accent'>{frontmatter.register[0].text}</h1>
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
        image
        hero {
          title
          subtitle
        }
        classes
        register {
          text
          button
        }
      }
    }
  }
`
