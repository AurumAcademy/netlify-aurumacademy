import React from 'react'
import RegisterForm from '../../forms/RegisterForm'

const StudentCreate = ({ user }) => {
  console.log(user)
  return (
    <div className='box'>
      <h1>Register a Student</h1>
      <RegisterForm user={user}/>
    </div>
  )
}

export default StudentCreate