import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { ContactForm } from '../../components/forms/ContactForm'
import config from '../../../config'

const ContactPage = () => {
  return (
    <Layout title='Contact Us'>
      <section className='section has-accent-background'>
        <div className='container content'>
          <div className='columns'>
            <div className='column has-medium-padding box is-8 is-offset-2'>
              <div className='mail-v'></div>
              <h1 className='title has-text-accent small-margin-bot'>Send us a message!</h1>
                <p>Or call us at <a href={`tel:`+config.phone}>{config.phone}</a></p>
                <ContactForm/>
            </div>
          </div>
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