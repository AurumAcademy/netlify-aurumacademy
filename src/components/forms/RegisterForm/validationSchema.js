import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  gname: Yup.string()
    .required('We need to know who you are!'),
  gemail: Yup.string()
    .email('Enter a Valid Email!')
    .required('We need to know your email so we can reply back!'),
  sname: Yup.string()
    .required('Who will we be teaching?'),
  sgrade: Yup.number()
    .min(1, 'Too small!')
    .max(12, 'Too big!')
})

export default validationSchema
