import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { ContactForm } from '../../components/forms/ContactForm'

const ContactPage = () => {
  return (
    <Layout title='Contact Us'>
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Contact Us</h1>

          <div className='envelope'>
            <div className='envelope-corner'></div>
            <div className='envelope-top'></div>
            <div className='envelope-back'></div>
          </div>

          <ContactForm/>
        </div>
      </section>
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage