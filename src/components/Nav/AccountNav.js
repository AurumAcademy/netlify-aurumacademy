import React from 'react'
import AccountNavItem from './AccountNavItem'
import { logout } from '../../utils/auth'

const AccountNav = () => {
  return (
    <div className='account-nav'>
      <AccountNavItem item={{name:'Dashboard', link:'/account'}} />
      <AccountNavItem item={{name:'Students', link:'/account/students'}} />
      {/* <AccountNavItem item={{name:'Account', link:'/account/edit'}} /> */}
      <hr/>
      <button className='button is-primary is-outlined' onClick={e => {
        e.preventDefault()
        logout() }}>
          Logout
        </button>
      </div>
  )
}

export default AccountNav
