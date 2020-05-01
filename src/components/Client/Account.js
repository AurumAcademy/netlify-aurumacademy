import React from 'react'
import AccountForm from '../forms/AccountForm'
import ManagePaymentsForm from '../forms/ManagePaymentsForm'

const Account = ({ user }) => {
  return (
    <div>

      <div className='box'>
        <h1>Account</h1>
        <p>Manage your account details here.</p>
      </div>

      <div className='box'>
        <h2>Edit Information</h2>
        <AccountForm user={user} />
      </div>


      { (user.paymentMethods && user.paymentMethods.length > 0) &&
        <div className='box'>
          <h2>Manage Payment Methods</h2>
          <ManagePaymentsForm user={user} />
        </div>
      }

    </div>
  )
}

export default Account