import React from 'react'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import FormButtons from '../FormButtons'

const StudentForm = ({buttons, onSubmit, ...rest}) => (
  <Formik
    initialValues={{ name:'', grade:'', background:'' }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    render={({ errors, touched, handleSubmit, isSubmitting }) => (
    <form
      {...rest}
      name='student'
      onSubmit={handleSubmit}
    >
        <div className='field'>
          <label className='label'>Student Name
            <span className='label-comment'>(We'll take good care of them!)</span>
          </label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Audrey Aurum Jr.' name='name' id='name' />
          </div>
          {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
        </div>

        <div className='field'>
          <label className='label'>What grade?
            <span className='label-comment'>We ask this so we can understand our student population.</span>
          </label>
          <div className='control'>
            <Field className='input' placeholder='Current student grade' type='number' name='grade' id='grade' min='1' max='12' />
          </div>
          {touched.grade && errors.grade && <small className='has-text-danger'>{errors.grade}</small>}
        </div>

        <div className='field'>
          <label className='label'>What experience?
            <span className='label-comment'>Just so you know, this isn't required.</span>
          </label>
          <div className='control'>
            <Field className='textarea' component='textarea' placeholder='We want to get to know the student! Tell us about them and their learning background.' name='background' id='background' rows='3' />
          </div>
          {touched.background && errors.background && <small className='has-text-danger'>{errors.background}</small>}
        </div>

        <FormButtons buttons={buttons} isSubmitting={isSubmitting} />
      </form>
    )}
  />
)

export default StudentForm
