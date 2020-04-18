import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import ClassCard from './ClassCard'

const ClassCards = () => {
  const data = useStaticQuery(graphql`
    query ClassCardsQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "class-page"}}}) {
        nodes {
          frontmatter {
            title
            link
            icon
            summary
            target
            cost
          }
        }
      }
    }
  `)
  const classes = data.allMarkdownRemark.nodes
  return (
    <div>
      {
        classes.map((c, i) => (
          <ClassCard key={i} data={c.frontmatter}/>
        ))
      }
    </div>
  )
}

export default ClassCards