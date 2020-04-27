import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const BioCard = ({ data }) => (
  <div className='box'>
    <div className='media'>
      <div className='media-left'>
        <Img className='image bio-pic' alt={data.name} fluid={data.image.childImageSharp.fluid}/>
      </div>
      <div className='media-content'>
        <div className='content'>
          <div className='level no-margin-bot'>
            <strong className='level-left'>{data.name}</strong>
            <div className='level-right no-margin-top'>
            {
              data.links.map((item) => {
                return <a key={item.label} href={item.link}>
                  {item.image ? <img src={item.image} aria-label={item.label} alt={item.label} className='bio-link-icon'/> : item.label}
                </a>
              })
            }
            </div>
          </div>
          <p> {data.text} </p>
        </div>
      </div>
    </div>
  </div>
)

BioCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.array,
    text: PropTypes.string,
  }),
}

export default BioCard 