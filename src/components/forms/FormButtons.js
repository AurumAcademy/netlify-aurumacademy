import React from 'react'
import PropTypes from 'prop-types'

const FormButtons = ({buttons, isSubmitting}) => {
  const bs = buttons || [{text:'Submit'}]
  return (

    <div className='field is-grouped is-grouped-centered'>
      {
        bs.map((b, i)=> {
          if (!b.click) {
            return (
              <div key={i} className='control'>
                <button className='button is-primary' type='submit' disabled={isSubmitting}>
                  {b.text}
                </button>
              </div>
            )
          } else {
            return (
              <div key={i} className='control'>
                <button className='button is-primary is-outlined' type='button' onClick={b.click}>
                  {b.text}
                </button>
              </div>
            )
          }
        })
      }
    </div>
  )
}

FormButtons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    click: PropTypes.func
  }))
}

export default FormButtons