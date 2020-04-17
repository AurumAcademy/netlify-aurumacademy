import React from "react"
import { login } from '../../utils/auth'

const Login = () => {
  login()

  return (
    <div className='is-full-height is-background-dark'>
      <div className='has-big-padding'>
        <p className='has-text-white'>
          Sending you to login page...
        </p>
      </div>
    </div>
  )
}

export default Login