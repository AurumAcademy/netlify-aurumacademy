import React from "react"
import { handleAuthentication } from '../../utils/auth'

const Callback = () => {
  handleAuthentication()

  return (
    <div className='is-full-height is-background-dark'>
      <div className='has-text-white has-big-padding'>
        Loading...
      </div>
    </div>
  )
}

export default Callback