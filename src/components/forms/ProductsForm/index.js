import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import validationSchema from './validationSchema'
import FormButtons from '../FormButtons'
import Checkbox from '../Checkbox'

class ProductsForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    buttons: PropTypes.array
  }

  handleChange = (e) => {
    var options = e.target.options
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
            value.push(options[i].value)
        }
    }

    this.props.selectionChanged(value)
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            classes: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "class-page"}}}) {
              nodes {
                frontmatter {
                  title
                }
              }
            }
            products: markdownRemark(frontmatter: {for: {eq: "products"}}) {
              frontmatter {
                content {
                  name
                  price
                }
              }
            }
          }
        `}
        render={(data) => (
          <Formik
            initialValues={{ cart: [] }}
            validationSchema={validationSchema}
            onChange={this.handleChange}
            onSubmit={this.props.onSubmit}
          
            render={({ errors, touched, isSubmitting, handleChange, handleSubmit }) => (
            <form
              name='products'
              onSubmit={handleSubmit}
            >

              <div className='field'>
                <label className='label'>Items</label>
                <div className='control'>
                  <ul className='has-no-list-style'>

                  {
                    data.products.frontmatter.content.map((p,i) => {
                      return <li key={i}>
                        <Checkbox name='cart' value={p.name} />
                      </li>
                    })
                  }
                  </ul>
                </div>
              </div>



              <div className='field'>
                <label className='label'>Classes</label>
                <div className='control'>
                  <ul className='has-no-list-style'>

                  {
                    data.classes.nodes.map((c,i) => (
                      <li key={i}>
                        <Checkbox name='cart' value={c.frontmatter.title} />
                      </li>
                    ))
                  }
                  </ul>
                </div>
              </div>

              <div className='field'>
                <label className='label'>Other</label>
                <div className='control'>
                  <ul className='has-no-list-style'>
                    <Checkbox name='cart' value='Robotics Summer' />
                  </ul>
                </div>
              </div>

              {touched.cart && errors.cart && <small className='has-text-danger'>{errors.cart}</small>}

              <FormButtons buttons={this.props.buttons} isSubmitting={isSubmitting} />

            </form>)}
          />
        )}
      />
    )
  }
}

export default ProductsForm
