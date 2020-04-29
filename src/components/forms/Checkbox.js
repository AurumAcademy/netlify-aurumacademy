import React from 'react'
import {Field} from 'formik'

const Checkbox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label className='checkbox'>
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  value => value !== props.value
                )
                form.setFieldValue(props.name, nextValue)
              } else {
                const nextValue = field.value.concat(props.value)
                form.setFieldValue(props.name, nextValue)
              }
            }}
          />
          <span className='checkbox-label'>
            {props.value}
          </span>
        </label>
      )}
    </Field>
  )
}

export default Checkbox