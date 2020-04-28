import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Plan = ({data}) => {


  return (
    <section className='section no-pad-top no-pad-bot'>
      <img className='image is-48x48 is-image-centered' src={data.icon} alt={data.name} />
      <p className='has-blob has-text-centered has-text-accent is-size-3 small-line-height'>
        {data.name}
      </p>
      <p className='is-size-6 has-text-centered has-text-weight-semibold is-marginless'>{data.text}</p>
      <ul className='has-small-padding no-margin-top'>
        {
          data.items.map((item, i) => {
            return (
              <li key={i}>
                {
                  item.link ? 
                    <Link to={item.link}>
                      { item.name }
                    </Link> : item.name
                }
              </li>
            )
          })
        }
      </ul>

    </section>
  )
}

Plan.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    cost: PropTypes.string,
    text: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    }))
  })
}

export default Plan
