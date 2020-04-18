import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './logo'
import NavItem from './NavItem'
import { isAuthenticated } from '../../utils/auth'

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
    if (this.props.onToggleSidebar) {
      this.props.onToggleSidebar()
    }
  }

  render() {
    let loggedIn = isAuthenticated()

    // TODO: add 'user' to query
    return <StaticQuery
      query={graphql`
        query NavbarQuery {
          markdownRemark(frontmatter: {for: {eq: "navbar"}}) {
            frontmatter {
              content {
                name
                type
                link
                items {
                  name
                  link
                }
              }
            }
          }
        }
      `}
      render={data => (
        <nav className='navbar is-dark' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              {this.props.hideLogo ? '' : <Logo/> }
            </Link>

            <div role="button" aria-label="menu"
              className={`navbar-burger ${this.state.isSidebarOpen? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={this.toggleSidebar}
            > <span/> <span/> <span/> </div>
          </div>
          
          <div ref={this.sidebar} className={`navbar-menu is-sidenav is-active ${this.state.isSidebarOpen ? 'is-sidenav-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>
              {
                data.markdownRemark.frontmatter.content.map(item => {
                  if (
                      (!item.user || item.user === null) ||
                      (!loggedIn && !item.user) ||
                      (loggedIn && item.user) 
                    ) {
                    return <NavItem key={item.name} item={item}/>
                  }
                })
              }
            </div>
          </div>
        </nav>
      )}
    />
  }
}

export default NavBar
