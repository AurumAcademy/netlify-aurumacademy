import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Class from './Class'

const Classes = ({names}) => {
  const data = useStaticQuery(graphql`
    query ClassesQuery {
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
    <div className='columns'>
      {
        names.map(name => (
          <Class key={name} data={classes.find(c => c.frontmatter.title === name).frontmatter} />
        ))
      }
    </div>
  )
}

Classes.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string)
}

export default Classes 

