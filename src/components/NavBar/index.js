import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'


class NavBar extends React.Component {
  static propTypes = {
    hideLogo: PropTypes.bool,
    onToggleSidebar: PropTypes.func
  }

  static defaultProps = {
    hideLogo: false
  }
  
  constructor (props) {
    super(props)
    this.state = { isSidebarOpen: false }
    this.sidebar = React.createRef()
  }

  toggleSidebar = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen})
    // this.sidebar.current.style.transform = this.state.isSidebarOpen ? 'translateX(100%)' : 'translate(0)'
    if (this.props.onToggleSidebar) {
      this.props.onToggleSidebar()
    }
  }

  render() {
    return <StaticQuery
      query={graphql`
              query {
                file(relativePath: { eq: "icon.png" }) {
                  childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
          `}
      render={data => (
        <nav className='navbar is-dark' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              {this.props.hideLogo ? '' : <Img className="logo-icon" fixed={data.file.childImageSharp.fixed}/> }
            </Link>

            <div role="button" aria-label="menu"
              className={`navbar-burger ${this.state.isSidebarOpen? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={this.toggleSidebar}
            > <span/> <span/> <span/> </div>
          </div>
          
          <div ref={this.sidebar} className={`navbar-menu is-sidenav is-active ${this.state.isSidebarOpen ? 'is-sidenav-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>
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
  }
}

export default NavBar
