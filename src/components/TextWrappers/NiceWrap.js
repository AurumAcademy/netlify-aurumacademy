import React from 'react'
import PropTypes from 'prop-types'

const NiceWrap = ({text}) => {

  return (
    <span>
      {
        text.split('/').map(t => (
          <span key={t} className='avoid-text-wrap'>{t}&nbsp;</span>
        ))
      }
    </span>
  )
}

NiceWrap.propTypes = {
  text: PropTypes.string
}

export default NiceWrap
