import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'
import useScript from '../../../hooks/useScript'

const RegisterForm = () => {
  useScript('https://smtpjs.com/v3/smtp.js')
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "class-page"}}}) {
            nodes {
              frontmatter {
                title
              }
            }
          }
        }
      `}
      render={data => (
        <Formik
          initialValues={{ gname:'', gemail:'', sname:'', sgrade:'', sinfo:'' , sclass:''}}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {

            Email.send({
              SecureToken: '88137f0a-632f-44c0-bf42-ea28ecdffa18',
              To : 'trinity@aurumacademy.tech',
              From : 'trinity@aurumacademy.tech',
              Subject : `[AurumAcademy] ${values.gname} just registered`,
              Body : [
                'Guardian Name: ' + values.gname,
                'Guardian Email: ' + values.gemail,
                'Student Name: ' + values.sname,
                'Student Grade: ' + values.sgrade,
                'Student Description:<br/>' + values.sinfo,
                'Class: ' + values.sclass
              ].join('<br/>')
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
          render={({ errors, touched, isSubmitting, handleChange, handleSubmit, handleReset }) => (
          <form
            name='contact'
            onSubmit={handleSubmit}
            onReset={handleReset}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <div className='field'>
              <label className='label'>Name of Guardian
                <span className='label-comment'>(You, hopefully!)</span>
              </label>
              <div className='control'>
                <Field className='input' type='text' placeholder='Ms. Aurora Aurum' name='gname' id='gname' />
              </div>
              {touched.gname && errors.gname && <small className='has-text-danger'>{errors.gname}</small>}
            </div>

            <div className='field'>
              <label className='label'>Email of Guardian
                <span className='label-comment'>(We'll be in touch through email!)</span>
              </label>
              <div className='control'>
                <Field className='input' type='email' placeholder='iamadult@mail.com' name='gemail' id='gemail' />
              </div>
              {touched.gemail && errors.gemail && <small className='has-text-danger'>{errors.gemail}</small>}
            </div>

            <div className='field'>
              <label className='label'>Name of Student
                <span className='label-comment'>(We'll take good care of them!)</span>
              </label>
              <div className='control'>
                <Field className='input' type='text' placeholder='Audrey Aurum Jr.' name='sname' id='sname' />
              </div>
              {touched.sname && errors.sname && <small className='has-text-danger'>{errors.sname}</small>}
            </div>

            <div className='field'>
              <label className='label'>What grade?
                <span className='label-comment'>We ask this so we can understand our student population.</span>
              </label>
              <div className='control'>
                <Field className='input' placeholder='Current student grade' type='number' name='sgrade' id='sgrade' min='1' max='12' />
              </div>
              {touched.sgrade && errors.sgrade && <small className='has-text-danger'>{errors.sgrade}</small>}
            </div>


            <div className='field'>
              <label className='label'>What class?
                <span className='label-comment'>It's OK to change your mind later.</span>
              </label>
              <div className='control select'>
                <select className='select is-primary' name='sclass' id='sclass' onChange={handleChange}>
                  <option value="none">Choose one!</option>
                  {
                    data.allMarkdownRemark.nodes.map(c => (
                      <option key={c.frontmatter.title} value={c.frontmatter.title}>{c.frontmatter.title}</option>
                    ))
                  }
                </select>
              </div>
              {touched.sclass && errors.sclass && <small className='has-text-danger'>{errors.sclass}</small>}
            </div>

            <div className='field'>
              <label className='label'>What is the student like?
                <span className='label-comment'>Just so you know, this isn't required.</span>
              </label>
              <div className='control'>
                <Field className='textarea' component='textarea' placeholder='We want to get to know the student! Tell us about them and their learning background.' name='sinfo' id='sinfo' rows='3' />
              </div>
              {touched.sinfo && errors.sinfo && <small className='has-text-danger'>{errors.sinfo}</small>}
            </div>

            <div className='field is-grouped'>
              <div className='control is-align-center'>
                <button id='' className='button is-primary' type='submit' disabled={isSubmitting}>Submit!</button>
              </div>
            </div>
          </form>)}
        />
      )}
    />
  )
}

export default RegisterForm
