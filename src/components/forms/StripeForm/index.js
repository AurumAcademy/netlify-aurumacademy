import React from 'react'
import PropTypes from 'prop-types'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import FormButtons from '../FormButtons'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PK)

class CheckoutForm extends React.Component {
  static propTypes = {
    customer: PropTypes.string
  }
  
  constructor (props) {
    super(props)
    this.state = { error: '' }
  }

  stripeSubmit = async (data) => {
    return new Promise(async (resolve, reject) => {
      const {stripe, elements, cart, student, customer} = this.props
      if (!stripe || !elements) {
        reject('Oops, we couldn\'t load Stripe (payment).')
      }

      const cardElement = elements.getElement(CardElement)
      stripe.createPaymentMethod({
        type: 'card',
        card: cardElement
      })
        .then((result) => {
          if (result.error) {
            console.log('[error]', result.error)
            reject(result.error.message)
          } else {
            fetch(process.env.GATSBY_BACKEND+'/api/checkout', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                customer: customer,
                payment: result.paymentMethod.id,
                billing: data,
                student: student,
                cart: cart,
              })
            })
              .then(response => {
                resolve(response.json())
              })
              .catch(error => reject(error))
          }
        })
    })
  }

  render() {
    const {stripe, buttons, ...props} = this.props

    const cardOptions = {
      iconStyle: 'solid',
      style: {
        base: {
          iconColor: '#d0d0d0',
          color: '#363636',
          fontWeight: 500,
          fontFamily: 'Cabin, sans-serif',
          fontSize: '18px',
          borderColor: '#dbdbdb',
          borderRadius: '4px',
          ':-webkit-autofill': {color: '#d0d0d0'},
          '::placeholder': {color: '#d0d0d0'}
        },
        invalid: {
          iconColor: '#ff3388',
          color: '#ff3388'
        }
      }
    }

    return (
  <Formik
    initialValues={{ name:'', line1:'', city:'', state:'', postal_code:'' }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      this.stripeSubmit(values)
        .then((receipt) => {
          this.props.onSubmit({shipping:values, receipt:receipt})
          actions.setSubmitting(false)
        })
        .catch((error) => {
          this.setState({error: error})
          actions.setSubmitting(false)
        })
    }}
    render={({ errors, touched, handleSubmit, isSubmitting, setSubmitting }) => (
      <form onSubmit={handleSubmit}>


        <div className='field is-horizontal'>
          <div className='field-body'>
            <p className='field control' >
              <label className='label'>Name</label>
              <Field className='input' type='text' placeholder='First Last' name='name' id='name' />
              {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
            </p>
          </div>
        </div>


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


        <div className='field'>
          <label className='label'>Card
            <span className='label-comment'>(We'll charge once for kits and subscribe you to classes)</span>
          </label>
          <div className='control'>
            {/* <div className='input'> */}
              <CardElement options={cardOptions} style={cardOptions.style} />
            {/* </div> */}
          </div>
          <p className='has-text-danger'>{this.state.error}</p>
        </div>

        <FormButtons buttons={buttons} isSubmitting={isSubmitting}/>
      </form>
    )}
  />
    )
  }
}

const InjectedStripeForm = ({...data}) => {
  return (
    <ElementsConsumer>
      {({...elements}) => (
        <CheckoutForm {...data} {...elements} />
      )}
    </ElementsConsumer>
  )
}

const StripeForm = ({...data}) => (
  <Elements stripe={stripePromise}>
    <InjectedStripeForm {...data} />
  </Elements>
)

export default StripeForm 