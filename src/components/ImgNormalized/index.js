import React from 'react'
import Img from 'gatsby-image'

const ImgNormalized = (props) => {
    let normalizedProps = props
    if (props.fluid && props.fluid.presentationWidth) {
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: props.fluid.presentationWidth,
          margin: "0 auto", // Used to center the image
        },
      }
    }
  
    return <Img {...normalizedProps} />
  }

export default ImgNormalized