import React from 'react'
import { Link } from 'gatsby'

const Dashboard = ({ user }) => {
  return (
    <div>

      <div className='box'>
        <h1 className='has-text-accent has-text-weight-semibold'>
          Welcome {user.name}
        </h1>
        <p>
          Thanks for signing up for Aurum Virtual Academy!
          You can view and manage student information and make
          transactions through this account.
        </p>
        <p>
          If you have any questions, you can always contact us at&nbsp;
          <a href='mailto:hi@aurumacademy.tech'>hi@aurumacademy.tech</a>.
        </p>
      </div>


      { (!user.students || user.students.length < 1) &&
        <div className='box'>
          <h2 className='has-text-accent has-text-weight-semibold'>
            Register a student
            <Link to='/account/register-student'>
              <button className='button is-primary is-pulled-right'>
                Start here &rarr;
              </button>
            </Link>
          </h2>
          <p>
            Register a student to sign up for a class and/or buy a kit.
          </p>
        </div>
      }

      <div className='box'>
        <h2 className='has-text-accent has-text-weight-semibold'>
          Notice
        </h2>
        <p>
          This is a simplified portal. If you have any questions or need to delete a student, please send a message to 
          &nbsp;<a href='mailto:trinity@aurumacademy.tech'>trinity@aurumacademy.tech</a>.
        </p>
      </div>

    </div>
  )
}

export default Dashboard