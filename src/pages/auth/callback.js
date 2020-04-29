import React from 'react'
import { Link } from 'gatsby'
import { handleAuthentication } from '../../utils/auth'

class Callback extends React.Component {
  async componentDidMount() {
    await handleAuthentication()
  }

  render() {
    return (
      <div className='is-full-height is-background-dark'>
        <div className='has-big-padding'>
          <p className='has-text-white'>
            Sending you to account page...
          </p>
          <p>
            <Link to='/account'>Click here if not redirecting</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Callback