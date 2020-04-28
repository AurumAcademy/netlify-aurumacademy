import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img className="logo-icon" fixed={data.file.childImageSharp.fixed}/>
    )}
  />
)

export default Logo
