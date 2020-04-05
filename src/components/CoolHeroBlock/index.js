import React from 'react'
import PropTypes from 'prop-types'

const CoolHeroBlock = ({ data }) => (
  <div className='columns is-multiline'>

  </div>
)

CoolHeroBlock.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default CoolHeroBlock 