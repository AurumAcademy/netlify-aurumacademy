import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive, hideLogo }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-dark' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            {hideLogo ? '' : <img className="logo-icon" src="/img/icon.png"/> }
          </Link>

          <div role="button" aria-label="menu"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          > <span/> <span/> <span/> </div>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-sidenav is-active has-text-right' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
            <Link className='navbar-item' to='/'>Home</Link>
            <Link className='navbar-item' to='/about'>About</Link>


            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Classes</a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to='/classes/backyard-ballistics'>
                  Backyard Ballistics
                </Link>
                <Link className="navbar-item" to='/classes/robotics-basics'>
                  Robotics Basics
                </Link>
                <Link className="navbar-item" to='/classes/project-code'>
                  Project Code
                </Link>
              </div>
            </div>


            <div className='navbar-item has-flex-right'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link className='button is-primary is-outlined' to='/register'>Register</Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
