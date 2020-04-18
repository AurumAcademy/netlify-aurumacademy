import React from 'react'
import PropTypes from 'prop-types'

const ClassCard = ({ data }) => (
  <div className='box'>
    <div className='media'>
      <div className='media-left'>
        <img className='image class-icon is-48x48' src={data.icon ? data.icon : 'https://placekitten.com/200/200'} alt='icon'/>
      </div>
      <div className='media-content'>
        <span className='is-size-4 has-text-accent has-text-weight-semibold'>
          {data.title}
        </span>
        <div className='columns'>
          <div className='column is-10'>
            <p>{data.summary}</p>
          </div>
          <div className='column'>
            <button className='button is-primary is-pulled-right'>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// templateKey: class-page
// title: Programming Principles
// link: /classes/program-principles
// icon: /svg/code.svg
// image: /img/projectcode.png
// summary: >-
//   Dive into the creative programming process by working on an app or game with a mentor! Fun and challenging for all skill levels.
// target: 4th-9th
// cost: '$20/hr'
// bios:
//   - Trinity Chung
ClassCard.propTypes = {
  data: PropTypes.shape({
    // name: PropTypes.string,
    // image: PropTypes.string,
    // links: PropTypes.array,
    // text: PropTypes.string,
  }),
}

export default ClassCard 