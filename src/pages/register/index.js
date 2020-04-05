import React from 'react'
import Layout from '../../components/Layout'
import RegisterForm from '../../components/forms/RegisterForm'

const RegisterPage = () => {
  return (
    <Layout title='Register'>
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Register</h1>
          <RegisterForm/>
        </div>
      </section>
    </Layout>
  )
}

export default RegisterPage