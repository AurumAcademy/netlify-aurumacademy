import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Classes from '../components/Classes/Classes'
import PromoVideo from '../assets/vid/promo.mp4'
import PromoThumbnail from '../assets/img/promo.png'
import config from '../../config'
import EachWrap from '../components/TextWrappers/EachWrap'
import NiceWrap from '../components/TextWrappers/NiceWrap'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return ( 
      <Layout hideLogo={true}>
        <section className='hero is-accent is-stagnant has-background'>
          <img className='hero-background is-transparent' src={frontmatter.image} />
          <div className='top-triangle is-left'></div>
          <Img className='main-logo' fixed={data.file.childImageSharp.fixed} alt={config.siteTitle}/>
          <div className='is-position-relative is-align-bottom has-medium-padding  has-text-white has-text-right has-text-accent small-line-height'>
            <h1 className='is-size-1 has-text-weight-semibold'><EachWrap text={frontmatter.hero.title}/></h1>
            <h2 className='is-size-2'>{frontmatter.hero.subtitle}</h2>
          </div>
        </section>

        <div className='content container'>

          <section className='section no-pad-bot columns'>
            <div className='column is-8 is-offset-2 is-size-4 headings-have-text-accent has-text-centered'>
              <h1>
                <NiceWrap text={frontmatter.welcome}/>
              </h1>
              {frontmatter.statement}
              <br/>
              <Video src={PromoVideo} thumbnail={PromoThumbnail} />
            </div>
          </section>

          <section className='section no-pad-bot'>
            <Classes names={frontmatter.classes}/>
          </section>

          <section className='section has-text-centered has-big-padding'>
            <h1 className='is-size-1 has-text-accent has-text-weight-normal'>{frontmatter.register.text}</h1>
            <Link className='button is-primary is-large' to='/register'>{frontmatter.register.button}</Link>
            {/* <h2 className='has-text-accent'>Questions?</h2>
            <Link className='button is-primary is-medium' to='/contact'>Contact</Link> */}
          </section>
        
        </div>
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
        welcome
        statement
        classes
        register {
          text
          button
        }
      }
    }
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
