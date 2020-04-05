import React from 'react'
import PropTypes from 'prop-types'

const Plans = ({ data }) => (
  <div className='columns'>
    {data.map(plan => (
      <div key={plan.name} className='column' style={{ border: '1px solid #eaecee' }}>
        <section className='section'>
          <img className='image is-96x96 is-image-centered' src={plan.image}></img>
          <h2 className='is-size-3 has-text-weight-bold has-text-primary has-text-centered small-line-height'>
            {plan.name}
          </h2>
          <div className=''>
            <p className='has-text-weight-semibold'>{plan.text}</p>
            <ul>
              {plan.items.map(item => (
                <li key={item} className='is-size-5'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
      // price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Plans 
