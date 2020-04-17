import React from "react"
import { login } from '../../utils/auth'

const Login = () => {
  login()

  return (
    <div className='is-full-height is-background-dark'>
      <div className='has-text-white has-big-padding'>
        Logging in...
      </div>
    </div>
  )
}

export default Login