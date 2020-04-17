import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'

class ProfileForm extends React.Component {
  static propTypes = {
    user: PropTypes.shape()
  }
  
  constructor (props) {
    super(props)
    this.state = { status: '' }
  }

  render() {
    const {user} = this.props
    return (
      <Formik
        initialValues={{name:user.name, email:user.email}}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          this.setState({status:{yay:true, message:'Saved'}})
        }}
        render={({ errors, touched, isSubmitting, handleSubmit }) => (
          <form
            name='contact'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <Field className='input' type='text' placeholder='First Last' name='name' id='name' />
              </div>
              {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
            </div>

            <div className='field'>
              <label className='label'>Email
                <span className='label-comment'>(Important! Required for communication)</span>
              </label>
              <div className='control'>
                <Field className='input' type='email' placeholder='iamadult@mail.com' name='email' id='email' />
              </div>
              {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
            </div>

            <div className='field is-grouped is-grouped-centered'>
              <div className='control'>
                <button className='button is-primary' type='submit'>
                  Save
                </button>
              </div>
            </div>

            { this.state.status &&
              <div className='has-text-centered'>
                <p className={this.state.status.yay ? 'has-text-success' : 'has-text-alert'}>
                  {this.state.status.message}
                </p>
              </div>
            }
          </form>
        )}
      />
    )
  }
}

export default ProfileForm
