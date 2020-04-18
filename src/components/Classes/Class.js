import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const Class = ({data}) => {

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.title,
    "description": data.summary
  }

  return (
    <section className='section no-pad-top no-pad-bot'>

      <Helmet>
        <script type="application/ld+json">
          { JSON.stringify(courseSchema) }
        </script>
      </Helmet>

      <img className='image is-64x64 is-image-centered' src={data.icon} />
      <p className='has-text-centered has-text-accent has-text-weight-bold has-text-primary is-size-3 small-line-height'>
        <Link to={data.link}>{data.title}</Link>
      </p>
      <p className='is-size-6 is-marginless'>{data.summary}</p>
      <ul className='has-small-padding has-text-centered has-no-list-style is-marginless'>
        <li className='is-size-6 has-text-weight-semibold'>
          Recommended for: {data.target}
        </li>
        <li className='has-small-padding'>
          <Link to={data.link} className='button is-primary'>Class Page<strong>&nbsp;→</strong></Link>
        </li>
      </ul>
    </section>
  )
}

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
