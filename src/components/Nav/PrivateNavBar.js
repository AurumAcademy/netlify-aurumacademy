import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'

class PrivateNavBar extends React.Component {
  render() {
    return <nav className='navbar is-dark' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <Logo/>
        </Link>
        <span className='navbar-item has-text-accent is-size-3'>
          Account
        </span>
      </div>
    </nav>
  }
}

export default PrivateNavBar
