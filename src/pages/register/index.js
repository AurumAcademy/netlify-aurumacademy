import React from 'react'
import Layout from '../../components/Layout'
import RegisterForm from '../../components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <Layout title='Register'>
      <section className='section has-accent-background'>
        <div className='container content'>
          <div className='columns'>
            <div className='column has-medium-padding box is-8 is-offset-2'>
              <h1 className='title has-text-accent'>Register</h1>
              <RegisterForm/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RegisterPage