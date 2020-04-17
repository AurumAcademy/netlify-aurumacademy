import React from 'react'
import StudentForm from '../StudentForm'
import PlanForm from '../PlanForm'
import StripeForm from '../StripeForm'
import { getUserMeta } from '../../Client/utils'

class RegisterForm extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = { page: 1, student: {}, plan: {name:''}, shipping: {}, receipt:'' }
  }

  handleStudent = (data) => {
    this.setState({student:data})
    this.nextPage()
    console.log(this.state)
  }

  handlePlan = ({plan}) => {
    this.setState({plan:JSON.parse(plan)})
    this.nextPage()
    console.log(this.state)
  }

  handleCheckout = ({shipping, receipt}) => {
    this.setState({shipping:shipping, receipt:receipt})
    this.nextPage()
    console.log(this.state)
  }

  nextPage = () => {
    console.log('next')
    let i = this.state.page
    this.changePage(i, i+1)
  }

  prevPage= () => {
    console.log('prevs')
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

    return (
      <div>

        <StudentForm
          id='page1'
          onSubmit={this.handleStudent}
          buttons={[
            {
              text: 'Continue'
            }
          ]}
        />
  
      <div id='page2' className='hidden'>
        <h2 style={{marginTop:'10px'}}>Select a plan</h2>
       <PlanForm
          onSubmit={this.handlePlan}
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
        <h2 style={{marginTop:'10px'}}>Checkout</h2>
        <p>Getting "{this.state.plan.name}" for {this.state.student.name}</p>

        <StripeForm
          plan={this.state.plan}
          customer={getUserMeta(this.props.user, 'stripe_cus')}
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
        <h2 style={{marginTop:'10px'}}>Yay!</h2>
        <p>Here's your receipt:
          <a href={this.state.receipt}>{this.state.receipt}</a>
        </p>
      </div>

      </div>
    )
  }
}

export default RegisterForm
