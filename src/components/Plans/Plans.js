import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import PricingCard from './Plan'

const PricingPlans = () => {
  const data = useStaticQuery(graphql`
    query PricingPlansQuery {
      markdownRemark(frontmatter: {for: {eq: "plans"}}) {
        frontmatter {
          content {
            icon
            name
            text
            items {
              name
              link
            }
          }
        }
      }
    }
  `)
  const plans = data.markdownRemark.frontmatter.content
  return (
    <div className='columns'>
      {
        plans.map((p, i) => (
          <div key={i} className='column'>
            <PricingCard data={p} />
          </div>
        ))
      }
    </div>
  )
}

export default PricingPlans 

