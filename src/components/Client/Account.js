import React from 'react'
import AccountForm from '../forms/AccountForm'

const Account = ({ user }) => {
  return (
    <div className='box'>
      <h1 className='has-text-accent has-text-weight-semibold'>
        Account
      </h1>
      <AccountForm user={user} />
    </div>
  )
}

export default Account