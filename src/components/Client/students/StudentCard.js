import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

const StudentCard = ({ data }) => {
  return (
    <div className='box'>
      <h1 className='has-text-accent has-text-weight-semibold'>
        {data.name}
      </h1>
      <ul>
        {
          data.classes.map((c, i) => (
            <li key={i}>{_.startCase(c)}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default StudentCard