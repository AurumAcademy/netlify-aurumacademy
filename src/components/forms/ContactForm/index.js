import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'
import useScript from '../../../hooks/useScript'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  useScript('https://smtpjs.com/v3/smtp.js')
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        Email.send({
          SecureToken: '88137f0a-632f-44c0-bf42-ea28ecdffa18',
          To : 'trinity@aurumacademy.tech',
          From : 'trinity@aurumacademy.tech',
          Subject : `[AurumAcademy] ${values.name} sent a message`,
          Body : `Email: ${values.email}</br>${values.message}`
        })
          .then((response) => {
            if (response === 'OK') {
              navigate('/contact/yay')
              setSubmitting(false)
            } else {
              navigate('/contact/sad')
              console.log(response)
            }
          })
      }}
      render={({ errors, touched, isSubmitting, handleSubmit }) => (<form
        name='contact'
        onSubmit={handleSubmit}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Aurora Aurum' name='name' id='name' />
          </div>
          {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <Field className='input' type='email' placeholder='iamcurious@mail.com' name='email' id='email' />
          </div>
          {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
        </div>

        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <Field className='textarea' component='textarea' name='message' id='message' rows='5' />
          </div>
          {touched.message && errors.message && <small className='has-text-danger'>{errors.message}</small>}
        </div>

        <div className='field is-grouped is-pulled-right'>
          <div className='control'>
            <button className='button is-large' type='submit' disabled={isSubmitting}>
                <span>Send</span>
                <img class="icon is-small" src='/svg/send-pink.svg'/>
            </button>
          </div>
        </div>
      </form>)}
    />
  )
}

export { ContactForm }
