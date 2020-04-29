import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  cart: Yup.array()
    .required('Choose a class/kit!'),
})

export default validationSchema
