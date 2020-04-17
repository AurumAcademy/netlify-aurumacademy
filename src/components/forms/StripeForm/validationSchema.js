import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  street: Yup.string()
    .required('This one\'s required!'),
})

export default validationSchema
