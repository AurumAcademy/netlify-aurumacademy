import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Class = ({data}) => (
  <section className='section no-pad-top no-pad-bot'>
    <img className='image is-96x96 is-image-centered' src={data.icon} />
    <div className='has-text-centered has-text-accent has-text-weight-bold has-text-primary is-size-3 small-line-height'>
      <Link to={data.link}>{data.title}</Link>
    </div>
    <p className='is-size-6'>{data.summary}</p>
    <ul className='has-small-padding has-text-centered is-dash'>
      <li className='is-size-6 has-text-weight-semibold'>
        Recommended for: {data.target}
      </li>
      <li className='has-small-padding'>
        <Link to={data.link} className='button is-primary'>Class Page<strong>&nbsp;→</strong></Link>
      </li>
    </ul>
  </section>
)

Class.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    summary: PropTypes.string,
    target: PropTypes.string
  })
}

export default Class
