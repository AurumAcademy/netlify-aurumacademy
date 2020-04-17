import React from 'react'
import { Link } from 'gatsby'

const StudentCard = ({ data }) => {
  return (
    <div className='box'>
      <h1 className='has-text-accent has-text-weight-semibold'>
        data.name
      </h1>
    </div>
  )
}

export default StudentCard