import React from 'react'
import PropTypes from 'prop-types'

const EachWrap = ({text}) => {

  return (
    <ul className='each-wrap'>
      {
        text.split(' ').map(t => (
          <li>{t}</li>
        ))
      }
    </ul>
  )
}

EachWrap.propTypes = {
  text: PropTypes.string
}

export default EachWrap