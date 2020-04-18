import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const ClassCard = ({ data }) => (
  <div className='box'>
    <div className='media'>
      <div className='media-left'>
        <img className='image class-icon is-48x48' src={data.icon ? data.icon : 'https://placekitten.com/200/200'} alt='icon'/>
      </div>
      <div className='media-content'>
        <span className='is-size-4 has-text-accent has-text-weight-semibold'>
          {data.title}
        </span>
        <div className='columns'>
          <div className='column is-10'>
            <p>{data.summary}</p>
          </div>
          <div className='column'>
            <Link to={data.link} >
              <button className='button is-primary is-pulled-right'>
                &rarr;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

ClassCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    summary: PropTypes.string,
    link: PropTypes.string
  }),
}

export default ClassCard 