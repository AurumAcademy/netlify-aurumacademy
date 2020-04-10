import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ src, thumbnail }) => (
  <div className='video-container'>
    <video controls poster={thumbnail} >
      <source src={src} type="video/mp4"/>
    </video>
  </div>
)

export default Video