import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ src, thumbnail, children }) => (
  <div className='video-container'>
    <video controls poster={thumbnail} >
      { src && <source src={src} type="video/mp4"/> }
      { children }
    </video>
  </div>
)

export default Video