import React from 'react'
import { Router } from '@reach/router'
import PrivateLayout from '../components/Layout/PrivateLayout'
import PrivateRoute from '../components/PrivateRoute'
import Dashboard from '../components/Client/Dashboard'
import Profile from '../components/Client/Profile'
import Students from '../components/Client/students/Students'
import StudentCreate from '../components/Client/students/StudentCreate'

const Account = () => {
  return (
    <PrivateLayout>
      <Router basepath='/account' style={{height:'110%'}}>
        <PrivateRoute path='/' component={Dashboard} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/students' component={Students} />
        <PrivateRoute path='/register-student' component={StudentCreate} />
      </Router>
    </PrivateLayout>
  )
}

export default Account