import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import PreregisterForm from '../../components/forms/PreregisterForm'

const PreregisterPage = () => {
  return (
    <Layout title='Preregister!'>
      <section className='section has-accent-background is-full-height'>
        <div className='container content'>
          <div className='columns'>
            <div className='column has-medium-padding box is-8 is-offset-2'>
              <h1 className='has-text-accent'>Preregister for Aurum Virtual Academy!</h1>
                <PreregisterForm/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

PreregisterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PreregisterPage