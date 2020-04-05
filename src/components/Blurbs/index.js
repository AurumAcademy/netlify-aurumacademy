import React from 'react'
import PropTypes from 'prop-types'

const Blurbs = ({ data }) => (
  <div className='columns is-multiline'>
    {data.map(item => (
      <div key={item.image} className='column is-6' style={{ borderRadius: '5px' }}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Blurbs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Blurbs 