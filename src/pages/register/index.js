import React from 'react'
import Layout from '../../components/Layout'
import RegisterForm from '../../components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <Layout title='Register'>
      <section className='section'>

        <div className='container content'>
          <div className='columns'>
            <div className='column is-6 is-offset-3'>
              <h1 className='title'>Register</h1>
              <RegisterForm/>
            </div>
          </div>
        </div>
    
      </section>
    </Layout>
  )
}

export default RegisterPage