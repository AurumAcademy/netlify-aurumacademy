import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Plan = ({ data, setFieldValue }) => (
  <div className='plan column'>

  <div className='has-text-accent has-text-centered'>
    <h3>{data.name}</h3>
    <h2 className='has-text-primary no-margin-top'>
      {data.cost}
    </h2>
  </div>

    <ul>
    {
      data.items.map((item, i) => (
        <li key={i}>
          {item.name}
        </li>
      ))
    }
    </ul>

  <input
    type='radio'
    id={data.name}
    name='plan'
    value={data.name}
    onChange={() => {
      let val = data.charge
      val.name = data.name
      console.log(val)
      setFieldValue('plan', JSON.stringify(val))
    }}

  />
  <label htmlFor={data.name} className='button'> Select </label>

  </div>
)

Plan.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.string,
    text: PropTypes.string,
    links: PropTypes.array,
  }),
}

export default Plan 