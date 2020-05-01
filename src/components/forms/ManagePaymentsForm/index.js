import React from 'react'
import PropTypes from 'prop-types'
import { setProfile } from '../../../utils/auth'
import _ from 'lodash'

class ManagePaymentsForm extends React.Component {
  static propTypes = {
    user: PropTypes.shape()
  }
  
  constructor (props) {
    super(props)
    console.l
    this.state = { button:'Save', error: '', paymentMethods: this.props.user.paymentMethods }
    this.deleteButtons = []
  }

  deleteCard = (id) => {
    let button = this.deleteButtons[id]
    button.innerHTML = 'Deleting'
    button.disabled = true

    try {
      fetch(process.env.GATSBY_BACKEND+'/api/account/deletecard', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({paymentMethod: id})
      })
      .then(async res => {
        if (res.status == 200) {
          await setProfile()
          const updated = _.reject(this.state.paymentMethods, (p) => p.id === id)
          button.innerHTML = 'Delete'
          this.setState({paymentMethods: updated})
        } else {
          console.log(res.error)
          button.innerHTML = 'Error :('
        }
      })
    } catch (error) {
      console.log(error)
      button.innerHTML = 'Error :('
    } finally {
      button.disabled = false
    }

  }

  render() {
    return (
      <div>
        {
            this.state.paymentMethods.map((p, i) => (
              <div key={i} className='box level'>
                <div className='level-left'>
                  <p className='level-item'>{_.upperFirst(p.card)} Card  (*{p.last4})</p>
                </div>
                <div className='level-right'>
                  <button ref={r => this.deleteButtons[p.id] = r} onClick={(event)=>{event.preventDefault(); this.deleteCard(p.id)}} className='button is-danger level-item is-align-center'>
                    Delete
                  </button>
                </div>
              </div>
            ))
          }
      </div>

    )
  }
}

export default ManagePaymentsForm
