import React from 'react'
import { Link, navigate } from 'gatsby'
import StudentForm from '../StudentForm'
import ProductsForm from '../ProductsForm'
import StripeForm from '../StripeForm'
import { setProfile } from '../../../utils/auth'

class RegisterForm extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = { page: 1, student: {}, cart: [], shipping: {}, receipt:'' }
  }

  handleStudent = (data) => {
    this.setState({student:data})
    this.nextPage()
  }

  handleCart = ({cart}) => {
    this.setState({cart:cart})
    this.nextPage()
    console.log(this.state.cart)
  }

  handleCheckout = ({pm, billing}) => {
    let student = {
      name: this.state.student.name,
      grade: this.state.student.grade,
      description: this.state.student.background,
      classes: this.state.cart.join(', '),
      parent_email: this.props.user.email
    }
    return new Promise(async (resolve, reject) => {
      try {
        fetch(process.env.GATSBY_BACKEND+'/api/checkout', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            customer: this.props.user.stripe_cus,
            payment: pm,
            billing: billing,
            student: student,
            cart: this.state.cart,
          })
        })
        .then(async res => {
          if (res.status == 200) {
            await setProfile()
            this.nextPage()
            resolve()
          } else {
            console.log(res.error)
            reject('Internal server error...')
          }
        })
        .catch(error => {
          console.log(error)
          reject(error.message)
        })
      } catch (error) {
          reject(error.message)
      }
    })
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
        <ul>
          {
            this.state.cart && this.state.cart.length > 0 &&
            this.state.cart.map((c, i) => (
              <li key={i}>
                {_.startCase(_.toLower(c))}
              </li>
            ))
          }
        </ul>
         <p>for <strong>{this.state.student.name}</strong></p>
         <hr/>

        <h2>Billing</h2>
        <StripeForm
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
        <h1>And you're done!</h1>
        <p>Thank you for registering. Expect an invoice to your email within 1-2 days.</p>
        <p>See you in class!</p>
        <div className='has-text-centered'>
          <Link to='/account/students'>
            <button className='button is-primary' type='button'>
              Hooray!
            </button>
          </Link>
        </div>
      </div>

    </div>
  }
}

export default RegisterForm
