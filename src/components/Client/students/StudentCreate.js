import React from 'react'
import RegisterForm from '../../forms/RegisterForm'

const StudentCreate = ({ user }) => {
  return (
    <div className='box'>
      <RegisterForm user={user}/>
    </div>
  )
}

export default StudentCreate