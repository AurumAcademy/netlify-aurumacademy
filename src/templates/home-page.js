import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoolHeroBlock from '../components/CoolHeroBlock'
import BigInfo from '../components/BigInfo'
import Plans from '../components/Plans'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
      </Helmet>
      <BigInfo gridItems={frontmatter.blurbs}></BigInfo>
      <Plans data={frontmatter.classes}></Plans>
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
        title
        meta_title
        meta_description
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
      }
    }
  }
`
