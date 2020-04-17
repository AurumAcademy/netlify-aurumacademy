import React from 'react'
import { Link } from 'gatsby'

const NavItem = ({item, onClick}) => {
  if (item.type === 'item') {
    return <Link className='navbar-item' to={item.link}>{item.name}</Link>
  } else if (item.type === 'item-accent') {
    return <Link className='navbar-item is-accent' to={item.link}>{item.name}</Link>
  } else if (item.type === 'dropdown') {
    return  (
      <div className="navbar-item has-dropdown is-hoverable">
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
    return <div className='navbar-item has-flex-right'>
      <div className='field is-grouped'>
        <p className='control'>
          { 
            item.link ? 
              <Link className='button is-primary is-outlined' to={item.link}>
                {item.name}
              </Link>
              :
              <button onClick={onClick} className='button is-primary is-outlined'>
                {item.name}
              </button>
          }
        </p>
      </div>
    </div>
  }
}

export default NavItem 