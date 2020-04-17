import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  plan: Yup.string()
    .required('Choose a plan!'),
})

export default validationSchema
