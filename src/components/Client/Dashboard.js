import React from 'react'
import { Link } from 'gatsby'

const Dashboard = ({ user }) => {
  return (
    <div>

      <div className='box'>
        <h1>
          Welcome {user.name}
        </h1>
        <p>
          Thanks for signing up for Aurum Virtual Academy!
          You can view and manage student information and make
          transactions through this account.
        </p>
      </div>


      { (!user.students || user.students.length < 1) &&
        <div className='box'>
          <h2>
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
        <h2>
          Notice
        </h2>
        <p>
          We hope to continue to add new features to this portal, such as student attendance and verified payments. If you have any questions or want to cancel an order, please don't hesitate to contact
          &nbsp;<a href='mailto:trinity@aurumacademy.tech'>trinity@aurumacademy.tech</a>.
        </p>
      </div>

    </div>
  )
}

export default Dashboard