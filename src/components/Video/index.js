import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ src, title }) => (
  <div className='video-container'>
    <iframe
      src={src}
      title={title}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      frameBorder='0'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen
    />
  </div>
)

Video.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
}

export default Video