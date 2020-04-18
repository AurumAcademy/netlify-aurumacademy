import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'
import Checkbox from '../Checkbox'
import config from '../../../../config'

class PreregisterForm extends React.Component {
  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
            value.push(options[i].value);
        }
    }

    this.props.selectionChanged(value);
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "class-page"}}}) {
              nodes {
                frontmatter {
                  title
                }
              }
            }
          }
        `}
        render={data => (
          <Formik
            initialValues={{ email: '', classes: [] }}
            validationSchema={validationSchema}
            onChange={this.handleChange}
            onSubmit={(values, { setSubmitting }) => {
              console.log(process.env.GATSBY_BACKEND)

          fetch(process.env.GATSBY_BACKEND + '/api/preregister', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(values)
          })
            .then((response) => {
              if (response.status == 200) {
                navigate('/preregister/yay')
              } else {
                navigate('/preregister/sad')
              }
            })
            .catch((error) => {
              navigate('/preregister/sad')
              console.log(error)
            })
        }}
          
            render={({ errors, touched, isSubmitting, handleChange, handleSubmit }) => (
            <form
              name='contact'
              onSubmit={handleSubmit}
            >
              <div className='field'>
                <label className='label'>Email
                  <span className='label-comment'>(We'll be in touch through email!)</span>
                </label>
                <div className='control'>
                  <Field className='input' type='email' placeholder='iamadult@mail.com' name='email' id='email' />
                </div>
                {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
              </div>

              <div className='field'>
                <label className='label'>What classes are you interested in?
                  <span className='label-comment'>This is so we know how to prepare!</span>
                </label>
                <div className='control'>
                  <ul className='has-no-list-style'>

                  {
                    data.allMarkdownRemark.nodes.map((c,i) => (
                      <li key={i}>
                        <Checkbox name='classes' value={c.frontmatter.title} />
                      </li>
                    ))
                  }
                  </ul>
                </div>
                {touched.classes && errors.classes && <small className='has-text-danger'>{errors.classes}</small>}
              </div>

            <div className='field is-grouped is-grouped-centered'>
              <div className='control'>
                <button className='button is-medium is-primary' type='submit' disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </div>

            </form>)}
          />
        )}
      />
    )
  }
}

export default PreregisterForm