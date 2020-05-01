import React from 'react'
import { Router } from '@reach/router'
import PrivateLayout from '../components/Layout/PrivateLayout'
import PrivateRoute from '../components/PrivateRoute'
import Dashboard from '../components/Client/Dashboard'
import Account from '../components/Client/Account'
import Students from '../components/Client/students/Students'
import StudentCreate from '../components/Client/students/StudentCreate'

const AccountRouter = () => {
  return (
    <PrivateLayout>
      <Router basepath='/account' style={{height:'110%'}}>
        <PrivateRoute path='/' component={Dashboard} />
        <PrivateRoute path='/edit' component={Account} />
        <PrivateRoute path='/students' component={Students} />
        <PrivateRoute path='/register-student' component={StudentCreate} />
      </Router>
    </PrivateLayout>
  )
}

export default AccountRouter