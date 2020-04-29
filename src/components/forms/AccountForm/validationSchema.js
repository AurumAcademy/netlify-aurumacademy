import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('We need to know who you are!'),
  email: Yup.string()
    .email('Valid email, please!')
    .required('We need to know your email for important communication!'),
})

export default validationSchema
