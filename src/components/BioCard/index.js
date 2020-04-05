import React from 'react'
import PropTypes from 'prop-types'

const BioCard = ({ data }) => (
  <div class='box'>
    <div class='media'>
      <div class='media-left'>
          <img className='image is-128x128' src={data.image ? data.image : 'https://placekitten.com/200/200'} alt='Image'/>
      </div>
      <div class='media-content'>
        <div class='content'>
          <p>
            <strong>{data.name}</strong> <small>{data.contact ? data.contact : ''}</small>
            <br/>
            {data.text}
          </p>
        </div>
      </div>
    </div>
  </div>
)

BioCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
  }),
}

export default BioCard 