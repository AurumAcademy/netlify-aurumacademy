import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {

        fetch(process.env.GATSBY_BACKEND + '/api/contact', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then((response) => {
            if (response.status == 200) {
              navigate('/contact/yay')
            } else {
              navigate('/contact/sad')
            }
          })
          .catch((error) => {
            navigate('/contact/sad')
            console.log(error)
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
                <img className="icon is-small" src='/svg/send-pink.svg'/>
            </button>
          </div>
        </div>
      </form>)}
    />
  )
}

export { ContactForm }
