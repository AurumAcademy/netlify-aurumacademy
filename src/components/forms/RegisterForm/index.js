import React from 'react'
import { Link } from 'gatsby'
import StudentForm from '../StudentForm'
import ProductsForm from '../ProductsForm'
import StripeForm from '../StripeForm'

class RegisterForm extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = { page: 1, student: {}, cart: {}, shipping: {}, receipt:'' }
  }

  handleStudent = (data) => {
    this.setState({student:data})
    this.nextPage()
  }

  handleCart = ({cart}) => {
    this.setState({cart:cart})
    this.nextPage()
  }

  handleCheckout = ({shipping, receipt}) => {
    this.setState({shipping:shipping, receipt:receipt})
    this.nextPage()
  }

  nextPage = () => {
    let i = this.state.page
    this.changePage(i, i+1)
  }

  prevPage= () => {
    let i = this.state.page
    this.changePage(i, i-1)
  }

  changePage = (from, to) => {
    let fromPage = document.getElementById('page'+from)
    let toPage = document.getElementById('page'+to)

    if (fromPage && toPage) {
      fromPage.className = 'hidden'
      toPage.className = ''
      this.setState({page: to})
    }
  }

  render() {

    return <div>

      <div id='page1'>
        <h1>Register a student</h1>
        <StudentForm
          onSubmit={this.handleStudent}
          buttons={[
            {
              text: 'Continue'
            }
          ]}
        />
       </div>
  
      <div id='page2' className='hidden'>
        <h1>Select kits and classes</h1>
        <ProductsForm
            onSubmit={this.handleCart}
            buttons={[
              {
                click: this.prevPage,
                text: 'Back'
              },
              {
                text: 'Continue'
              }
            ]}
          />
      </div>
  
      <div id='page3' className='hidden'>
        <h1>Checkout</h1>
        <p>Getting "{JSON.stringify(this.state.cart)}" for {this.state.student.name}</p>

        <StripeForm
          customer={this.props.user.stripe_cus}
          cart={this.state.cart}
          student={this.state.student}
          onSubmit={this.handleCheckout}
          buttons={[
            {
              click: this.prevPage,
              text: 'Back'
            },
            {
              text: 'Submit'
            }
          ]}
        />
      </div>
  
      <div id='page4' className='hidden'>
      {/* <div id='page4'> */}
        <h1>And you're done!</h1>
        <p>Thank you for registering. See you in class!</p>
          <div className='field is-grouped is-grouped-center'>
            <div className='control'>
              <button className='button is-primary' type='button' onClick={() => {window.location.reload(false)}}>
                Hooray!
              </button>
            </div>
          </div>
        
      </div>

    </div>
  }
}

export default RegisterForm
