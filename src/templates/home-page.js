import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ImgNormalized from '../components/ImgNormalized'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Classes from '../components/Classes/Classes'
import PromoThumbnail from '../assets/vid/promo.png'
import PromoVideo from '../assets/vid/promo.mp4'
import config from '../../config'
import EachWrap from '../components/TextWrappers/EachWrap'
import NiceWrap from '../components/TextWrappers/NiceWrap'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter.image)
  return ( 
      <Layout hideLogo={true}>
        <section className='hero is-accent is-stagnant has-background'>
        {/* <img className='hero-background is-transparent' src='img/robot.png' /> */}
          <ImgNormalized className='hero-background is-transparent' fluid={data.imageSharp.fluid} alt={config.siteTitle}/>
          <div className='top-triangle is-left'></div>
          <Img className='main-logo' fluid={data.file.childImageSharp.fluid} alt={config.siteTitle}/>
          <div className='is-position-relative is-align-bottom has-medium-padding  has-text-white has-text-right has-text-accent small-line-height'>
            <h1 className='is-size-1 has-text-weight-semibold hero-title'><EachWrap text={frontmatter.hero.title}/></h1>
            <h2 className='is-size-2 hero-subtitle'><NiceWrap text={frontmatter.hero.subtitle}/></h2>
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
              <h3 className='has-text-centered has-text-accent no-margin-bot'>
                Here's a fun video about what it's like!
              </h3>
              <Video src={PromoVideo} thumbnail={PromoThumbnail} />
            </div>
          </section>

          <section className='section no-pad-bot'>
            <h1 className='has-text-centered has-text-accent'>
              Featured Classes
            </h1>
            <hr/>
            <Classes names={frontmatter.classes}/>
            <h2 className='has-text-centered has-text-accent'>
              see the <Link to='/classes'>class overview &rarr;</Link>
            </h2>
          </section>

          <section className='section has-text-centered has-big-padding'>
            <h1 className='is-size-1 has-text-accent has-text-weight-normal'>{frontmatter.register.text}</h1>
            <Link className='button is-primary is-large has-text-weight-medium' to={frontmatter.register.link}>
              {frontmatter.register.button}
            </Link>
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
          link
        }
      }
    }
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    imageSharp(fixed: {originalName: {eq: "robot.png"}}) {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }
`
