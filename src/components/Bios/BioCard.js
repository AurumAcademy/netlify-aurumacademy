import React from 'react'
import PropTypes from 'prop-types'

const BioCard = ({ data }) => (
  <div className='box'>
    <div className='media'>
      <div className='media-left'>
          <img className='image bio-pic is-128x128' src={data.image ? data.image : 'https://placekitten.com/200/200'} alt='Image'/>
      </div>
      <div className='media-content'>
        <div className='content'>
          <div className='level no-margin-bot'>
            <strong className='level-left'>{data.name}</strong>
            <div className='level-right'>
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