import React from 'react'
import { Link } from 'gatsby'

const Dashboard = ({ user }) => {
  console.log(user)
  return (
    <div>

      <div className='box'>
        <h1 className='has-text-accent has-text-weight-semibold'>
          Welcome {user.nickname || user.name}
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

      <div className='box'>
        <h2 className='has-text-accent has-text-weight-semibold'>
          Student registration closed
        </h2>
        <p>
          Registration will open on 4/22.
          But thank you for signing up early! It helps us gauge how we should
          scale our service.
        </p>
      </div>


{/* 
      { !user.students &&
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
            Sign up for a plan and get materials.
          </p>
        </div>
      } */}

      <div className='box'>
        <h2 className='has-text-accent has-text-weight-semibold'>
          Notice
        </h2>
        <p>
          There's not much here right now, but the code monkey behind this
          is hard at work on new features!
        </p>
      </div>

    </div>
  )
}

export default Dashboard