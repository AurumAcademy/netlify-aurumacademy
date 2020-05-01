import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  line1: Yup.string()
    .required('This one\'s required!'),
})

export default validationSchema
