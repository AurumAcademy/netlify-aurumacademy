import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import { setProfile } from '../../../utils/auth'
import _ from 'lodash'

class AccountForm extends React.Component {
  static propTypes = {
    user: PropTypes.shape()
  }
  
  constructor (props) {
    super(props)
    this.state = { button:'Save', error: '' }
  }

  render() {
    const {user} = this.props
    console.log('user', user)
    return (
      <Formik
        initialValues={{customer: user.stripe_cus, name:user.name, email:user.email, line1: user.billing.line1, city: user.billing.city, state: user.billing.state, postal_code: user.billing.postal_code}}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('save', values)
          this.setState({button: 'Saving...'})

          try {
            fetch(process.env.GATSBY_BACKEND+'/api/account/update', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(values)
            })
            .then(async res => {
              if (res.status == 200) {
                await setProfile()
                this.setState({button: 'Saved!'})
              } else {
                console.log(res.error)
                this.setState({error:'Internal server error...', button:'Save'})
              }
            })
          } catch (error) {
            console.log(error)
            this.setState({error:'Internal server error...', button:'Save'})
          } finally {
            setSubmitting(false)
          }
        }}
        render={({ errors, touched, isSubmitting, handleSubmit }) => (
          <form
            name='contact'
            onSubmit={handleSubmit}
          >

            <div className='field'>
              <label className='label'>Email
                <span className='label-comment'>(Please check regularly!)</span>
              </label>
              <div className='control'>
                <Field className='input' type='email' placeholder='iamadult@mail.com' name='email' id='email' disabled={true} />
              </div>
              {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
            </div>

            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <Field className='input' type='text' placeholder='First Last' name='name' id='name' />
              </div>
              {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
            </div>



            <h3>Billing</h3>

            <div className='field is-horizontal'>
              <div className='field-body'>
                <p className='field control' >
                  <label className='label'>Street Address
                    <span className='label-comment'>(For shipping kits!)</span>
                  </label>
                  <Field className='input' type='text' placeholder='1234 Yellow Brick Rd' name='line1' id='line1' />
                  {touched.line1 && errors.line1 && <small className='has-text-danger'>{errors.line1}</small>}
                </p>
              </div>
            </div>

            <div className='field is-horizontal'>
              <div className='field-body' style={{flexGrow:8, marginRight:'20px'}}> 
                <p className='field control'>
                  <label className='label'>City</label>
                  <Field className='input' type='text' placeholder='Golden City' name='city' id='city' />
                  {touched.city && errors.city && <small className='has-text-danger'>{errors.city}</small>}
                </p>
              </div>
              <div className='field-body' style={{flexGrow:6, marginRight:'20px'}}> 
                <p className='field control'>
                  <label className='label'>State
                    <span className='label-comment'>or Province</span>
                  </label>
                  <Field className='input' type='text' placeholder='AA' name='state' id='state' />
                  {touched.state && errors.state && <small className='has-text-danger'>{errors.state}</small>}
                </p>
              </div>
              <div className='field-body' style={{flexGrow:6}}> 
                <p className='field control'>
                  <label className='label'>ZIP
                    <span className='label-comment'>or Postal Code</span>
                  </label>
                  <Field className='input' type='text' placeholder='12345' name='postal_code' id='postal_code' />
                  {touched.postal_code && errors.postal_code && <small className='has-text-danger'>{errors.postal_code}</small>}
                </p>
              </div>
            </div>


            <small className='has-text-danger'>{this.state.error}</small>

            <div className='field is-grouped is-grouped-centered'>
              <div className='control'>
                <button className='button is-primary' type='submit' disabled={isSubmitting}>
                  {this.state.button}
                </button>
              </div>
            </div>

          </form>
        )}
      />
    )
  }
}

export default AccountForm
