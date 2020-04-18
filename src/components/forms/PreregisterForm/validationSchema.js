import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email!')
    .required('We need to know your email so we can notify!'),
})

export default validationSchema
