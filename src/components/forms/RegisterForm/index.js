import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'
import useScript from '../../../hooks/useScript'

const RegisterForm = () => {
  useScript('https://smtpjs.com/v3/smtp.js')
  return (
    <Formik
      initialValues={{ gname:'', gemail:'', sname:'', sgrade:'', sinfo:'' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {

        Email.send({
          SecureToken: '88137f0a-632f-44c0-bf42-ea28ecdffa18',
          To : 'trinity@aurumacademy.tech',
          From : 'trinity@aurumacademy.tech',
          Subject : `[Automated] ${values.gname} just registered`,
          Body : [
            'Guardian Name: ' + values.gname,
            'Guardian Email: ' + values.gemail,
            'Student Name: ' + values.sname,
            'Student Grade: ' + values.sgrade,
            'Student Description:\n' + values.sinfo,
          ].join('\n\n')
        })
          .then((response) => {
            if (response === 'OK') {
              navigate('/register/yay')
              setSubmitting(false)
            } else {
              navigate('/register/sad')
              console.log(response)
            }
          })
      }}
      render={({ errors, touched, isSubmitting, handleSubmit, handleReset }) => (
      <form
        name='contact'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <div className='field'>
          <label className='label'>Name (Guardian)</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Ms. Aurora Augsberg' name='gname' id='gname' />
          </div>
          {touched.gname && errors.gname && <small className='has-text-danger'>{errors.gname}</small>}
        </div>

        <div className='field'>
          <label className='label'>Email (Guardian)</label>
          <div className='control'>
            <Field className='input' type='email' placeholder='iamadult@mail.com' name='gemail' id='gemail' />
          </div>
          {touched.gemail && errors.gemail && <small className='has-text-danger'>{errors.gemail}</small>}
        </div>

        <div className='field'>
          <label className='label'>Name (Student)</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Audrey Augsberg Jr.' name='sname' id='sname' />
          </div>
          {touched.sname && errors.sname && <small className='has-text-danger'>{errors.sname}</small>}
        </div>

        <div className='field'>
          <label className='label'>Current Grade (Student)</label>
          <div className='control'>
            <Field className='input' type='number' name='sgrade' id='sgrade' min='1' max='12' />
          </div>
          {touched.sgrade && errors.sgrade && <small className='has-text-danger'>{errors.sgrade}</small>}
        </div>

        <div className='field'>
          <label className='label'>About the student</label>
          <div className='control'>
            <Field className='textarea' component='textarea' placeholder='We want to get to know the student! Tell us about them and their learning background.' name='sinfo' id='sinfo' rows='3' />
          </div>
          {touched.sinfo && errors.sinfo && <small className='has-text-danger'>{errors.sinfo}</small>}
        </div>

        <div className='field is-grouped is-pulled-right'>
          <div className='control'>
            <button id='' className='button is-primary' type='submit' disabled={isSubmitting}>Submit</button>
          </div>
        </div>
      </form>)}
    />
  )
}

export default RegisterForm
