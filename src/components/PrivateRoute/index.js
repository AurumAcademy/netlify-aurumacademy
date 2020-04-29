import React from 'react'
import { getProfile, login, isAuthenticated } from '../../utils/auth'
import AccountNav from '../Nav/AccountNav'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isAuthenticated()) {
    login()
    return <section className='hero is-accent is-full-height'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section is-centered content is-large has-text-dark'>
                  <h1 className='has-text-accent'>One second...</h1>
                  Redirecting to login...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  }
  let user = getProfile()
  return (
      <div className='content is-full-height'>
        <div className='columns is-full-height'>

          <div className='column box is-3 has-medium-padding has-text-accent has-text-weight-semibold'>
            <AccountNav/>
          </div>

          <div className='column is-7 is-offset-1 has-medium-padding has-margin-top has-margin-bot'>
            <Component user={user} {...rest} />
          </div>

        </div>
      </div>
  )
}
export default PrivateRoute