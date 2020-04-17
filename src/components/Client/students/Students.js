import React from 'react'
import { Link } from 'gatsby'
import StudentCard from './StudentCard'
import { getUserMeta } from '../utils'

const Students = ({ user }) => {
  console.log(user)
  const students = getUserMeta(user, 'students') || []
  if (students.length < 1) {
    return (
      <div className='flex-center-container is-full-height'>
        <div>
          <p className='no-data-message'> No students yet! </p>
          {/* <Link to='account/register-student' className='button is-gold'>
            Register a Student
          </Link> */}
          <div className='button is-gold'>
            Registration closed
          </div>
          
        </div>
      </div>
    )
  }
  return (
    <div className='is-full-height'>
      {
        students.map(student => (
          <StudentCard key={student.name} data={student} />
        ))
      }
    </div>
  )
}

export default Students