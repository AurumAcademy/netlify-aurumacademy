import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Plans = ({ data }) => (
  <div className='columns'>
    {data.map(plan => (
      <div key={plan.name} className='column'>
        <section className='section no-pad-top no-pad-bot'>

          <img className='image is-96x96 is-image-centered' src={plan.image}></img>
          <div className='has-text-centered has-text-accent has-text-weight-bold has-text-primary is-size-3 small-line-height'>
            <Link to={plan.page}> {plan.name} </Link>
          </div>
          <p className='is-size-6'>{plan.text}</p>
          <ul className='has-small-padding has-text-centered is-dash'>
            {plan.items.map(item => (
              <li key={item} className='is-size-6 has-text-weight-semibold'>
                {item}
              </li>
            ))}
          </ul>

        </section>
      </div>
    ))}
  </div>
)

Plans.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      page: PropTypes.string,
      text: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Plans 
