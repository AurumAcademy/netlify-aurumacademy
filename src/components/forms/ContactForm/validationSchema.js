import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('We need to know who you are!'),
  email: Yup.string()
    .email('Enter a Valid Email!')
    .required('We need to know your email so we can reply back!'),
  message: Yup.string()
    .required('Um... so what did you want to talk about?'),
})

export default validationSchema
