import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe("pk_test_GB2AWyTSWgRw2WxzuyE1YnvK00IWhJkKUx")

const StripeForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeForm 