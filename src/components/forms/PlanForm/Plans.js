import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Plan from './Plan'

const Plans = ({setFieldValue}) => {
  const data = useStaticQuery(graphql`
    query PlansQuery {
      markdownRemark(frontmatter: {for: {eq: "plans"}}) {
        frontmatter {
          text
          content {
            name
            cost
            text
            items {
              name
              link
            }
            charge {
              initial
              prod
              plan
            }
          }
        }
      }
    }
  `)
  const plans = data.markdownRemark.frontmatter.content
  return (
    <div>
      <p>{data.markdownRemark.frontmatter.text}</p>
      <div className='plans columns is-desktop'>
        {
          plans.map((p, i)=> {
            return <Plan key={i} data={p} setFieldValue={setFieldValue}/>
          })
        }
      </div>
    </div>
  )
}

export default Plans