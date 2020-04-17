import React from 'react'
import { Link } from 'gatsby'
import { handleAuthentication } from '../../utils/auth'

const Callback = () => {
  handleAuthentication()

  return (
    <div className='is-full-height is-background-dark'>
      <div className='has-text-white has-big-padding'>
        Loading...
        <Link to='/account'>Click here if not redirecting</Link>
      </div>
    </div>
  )
}

export default Callback