import React from 'react'
import PropTypes from 'prop-types'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { stripeCharge } from './utils'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import FormButtons from '../FormButtons'

const stripePromise = loadStripe("pk_test_Ez1zgMkkKMNBNpAXPS1KnIvc00DCalp86X")

class CheckoutForm extends React.Component {
  static propTypes = {
    customer: PropTypes.string
  }
  
  constructor (props) {
    super(props)
    this.state = { error: '' }
  }

  stripeSubmit = async () => {
    return new Promise(async (resolve, reject) => {
      const {stripe, elements, plan, customer} = this.props
      if (!stripe || !elements) {
        reject('stripes not exist')
      }

      const card = elements.getElement(CardElement)
      const {error, token} = await stripe.createToken(card)
      if (error) {
        console.log('[error]', error)
        reject(error.message)
      } else {
        stripeCharge({
          token:token.id,
          plan:plan,
          customer:customer
        })
          .then((data) => {
            console.log('resolve stripecharge')
            resolve(data.receipt_url)
          })
          .catch((error) => {
            reject('Error reaching the server. This is probably on our end :(. Please send us an email and we will sort this out.')
          })
      }
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
    initialValues={{ street:'', city:'', state:'', zip:'' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      this.stripeSubmit()
        .then((receipt) => {
          this.props.onSubmit({shipping:values, receipt:receipt})
        })
        .catch((error) => {
          this.setState({error: error})
        })
    }}
    render={({ errors, touched, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>

        <div className='field is-horizontal'>
          <div className='field-body'>
            <p className='field control' >
              <label className='label'>Street Address
                <span className='label-comment'>(For shipping kits!)</span>
              </label>
              <Field className='input' type='text' placeholder='1234 Yellow Brick Rd' name='street' id='street' />
              {touched.street && errors.street && <small className='has-text-danger'>{errors.street}</small>}
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
              <label className='label'>State</label>
              <Field className='input' type='text' placeholder='AA' name='state' id='state' />
              {touched.state && errors.state && <small className='has-text-danger'>{errors.state}</small>}
            </p>
          </div>
          <div className='field-body'>
            <p className='field control'>
              <label className='label'>Zip</label>
              <Field className='input' type='text' placeholder='12345' name='zip' id='zip' />
              {touched.zip && errors.zip && <small className='has-text-danger'>{errors.zip}</small>}
            </p>
          </div>
        </div>


        <div className='field'>
          <label className='label'>Card
            <span className='label-comment'>(We'll charge once for kits, then subscribe you to classes)</span>
          </label>
          <div className='control'>
            {/* <div className='input'> */}
              <CardElement options={cardOptions} style={cardOptions.style} />
            {/* </div> */}
          </div>
          <p className='has-text-danger'>{this.state.error}</p>
        </div>

        <FormButtons buttons={buttons}/>
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