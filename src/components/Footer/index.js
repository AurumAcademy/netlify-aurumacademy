import React from 'react'
import { Link } from 'gatsby'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

          <div className='columns'>
            <div className='column'>
              <h4 className='is-size-4'>Contact</h4>
              <p>
                <Link className='button is-primary is-outlined' to='/contact'>
                  Send a message
                </Link>
              </p>
              <p><a href='mailto:hi@aurumacademy.tech'>hi@aurumacademy.tech</a></p>
              <p><a href='tel:123-456-7890'>123-456-7890</a></p>

            </div>

            <div className='column'>
              <h4 className='is-size-4'>Company</h4>
              <p><Link to='/legal/terms'>Terms and Conditions</Link></p>
              <p><Link to='/legal/privacy'>Privacy Policy</Link></p>
              <p><Link to='/blog'>Blog</Link></p>
            </div>

            <div className='column'>
              <p>Aurum Academy is associated with</p>
              <a href='https://goldengears.gq'>
                <img className='footer-logo' src='/img/goldengears.png' alt='Golden Gears'/>
              </a>
            </div>
          </div>

          <p className='has-text-centered'>{config.copyright}</p>

      </div>
    </footer>
  )
}

export default Footer
