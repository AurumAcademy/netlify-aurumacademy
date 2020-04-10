import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import PropTypes from 'prop-types'
import Logo from './logo'


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
                  if (item.type === 'item') {
                    return <Link key={item.name} className='navbar-item' to={item.link}>{item.name}</Link>
                  } else if (item.type === 'dropdown') {
                    return  (
                      <div key={item.name} className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">{item.name}</a>
                        <div className="navbar-dropdown">
                          {
                            item.items.map(subItem => (
                              <Link key={subItem.name} className="navbar-item" to={subItem.link}>
                                {subItem.name}
                              </Link>
                            ))
                          }
                        </div>
                      </div>
                    )
                  } else if (item.type === 'button') {
                    return <div key={item.name} className='navbar-item has-flex-right'>
                      <div className='field is-grouped'>
                        <p className='control'>
                          <Link className='button is-primary is-outlined' to={item.link}>
                            {item.name}
                          </Link>
                        </p>
                      </div>
                    </div>
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
