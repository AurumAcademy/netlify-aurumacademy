import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BioCard from './BioCard'

const BioCards = ({names}) => {
  const data = useStaticQuery(graphql`
    query BiosQuery {
      markdownRemark(frontmatter: {for: {eq: "bios"}}) {
        frontmatter {
          content {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
  `)
  const bios = data.markdownRemark.frontmatter.content
  return (
    <section className='section'>
      {
        names.map(name => {
          return <BioCard key={name} data={bios.find(b=>b.name==name)}/>
        })
      }
    </section>
  )
}

BioCards.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
}

export default BioCards