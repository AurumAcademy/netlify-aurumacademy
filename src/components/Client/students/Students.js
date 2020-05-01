import React from 'react'
import { Link } from 'gatsby'
import StudentCard from './StudentCard'

const Students = ({ user }) => {
  const students = user.students || []
  if (students.length < 1) {
    return (
      <div className='flex-center-container is-full-height'>
        <div>
          <p className='no-data-message'> No students yet! </p>
          <Link to='account/register-student' className='button is-gold'>
            Register Student
          </Link>
        </div>
      </div>
    )
  }
  return (

    <div className='is-full-height'>

      <div className='box'>
        <h1>Students</h1>
        <p>View registered students below.</p>
          <Link to='/account/register-student'>
            <button className='button is-primary'>
              Register new student &rarr;
            </button>
          </Link>
      </div>
      <hr/>

      {
        students.map((s, i)=> (
          <StudentCard key={i} data={s} />
        ))
      }

    </div>
  )
}

export default Students