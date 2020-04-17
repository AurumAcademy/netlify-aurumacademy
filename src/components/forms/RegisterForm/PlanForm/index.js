import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import FormButtons from '../FormButtons'
import Plans from './Plans'

const PlanForm = ({buttons, onSubmit, ...rest}) => {
  return <Formik
    initialValues={{ plan:'' }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    render={({ errors, touched, handleSubmit, isSubmitting, setFieldValue }) => (
    <form
      {...rest}
      name='plan'
      onSubmit={handleSubmit}
    >

      <div className='field'>
        <div className='control'>
          <Plans setFieldValue={setFieldValue}/>
        </div>
        {touched.plan && errors.plan && <small className='has-text-danger'>{errors.plan}</small>}
      </div>

        <FormButtons buttons={buttons} isSubmitting={isSubmitting} />

      </form>
    )}
  />
}

PlanForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default PlanForm
