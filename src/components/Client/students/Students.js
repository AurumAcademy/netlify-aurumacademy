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
      {
        students.map((s, i)=> (
          <StudentCard key={i} data={s} />
        ))
      }

      <div className='box'>
          <h2 className='has-text-accent has-text-weight-semibold'>
            Add another student
            <Link to='/account/register-student'>
              <button className='button is-primary is-pulled-right'>
                Register student &rarr;
              </button>
            </Link>
          </h2>
        </div>
    </div>
  )
}

export default Students