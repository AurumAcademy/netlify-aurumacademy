import React from 'react'
import { Link } from 'gatsby'

const AccountNavItem = ({item}) => {
  const isCurrent = window.location.pathname === item.link
  return (
    <Link className={`account-nav-item ${isCurrent ? 'is-current' : ''}`} to={item.link}>
      {item.name}
    </Link>
  )
}

export default AccountNavItem 