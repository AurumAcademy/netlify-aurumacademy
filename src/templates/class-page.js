import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import BioCards from '../components/Bios/BioCards'

const ClassPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout title={post.frontmatter.title}>
      <div className='hero is-medium is-accent has-background'>
        <img className='hero-background is-transparent' src={post.frontmatter.image} />


        <div className='hero-body'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-offset-1'>
                <Link to='/classes'>
                  <button className='button is-primary'>
                    &larr; All Classes
                  </button>
                </Link>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-offset-1'>
                <h1 className='has-text-big has-text-accent has-text-weight-semibold  is-align-bottom'>
                  {post.frontmatter.title}
                </h1>
              </div>
              <div className='column'>
                <div className='box'>
                  <p>
                    {post.frontmatter.summary}
                  </p>
                  <ul className='has-no-list-style no-margin-left'>
                    <li>
                      <a href='#whos-a-fit' className='has-text-weight-semibold'>
                        Target Grade Level:
                      </a> {post.frontmatter.target}
                    </li>
                    <li>
                      <a href='#pricing' className='has-text-weight-semibold'>
                        Cost Estimate:
                      </a> {post.frontmatter.cost}
                    </li>
                    <li>
                      <span className='has-text-weight-semibold'>
                        Prerequisites:
                      </span>
                      {
                        post.frontmatter.prereq ?
                          post.frontmatter.prereq.map((item, i) => {
                            const element = item.link ?
                              <Link to={item.link}>
                                &nbsp;{item.name}
                              </Link> : <span> {item.name} </span>
                            return <span key={i}>
                              {element}
                              {i==post.frontmatter.prereq.length-1 ? '' : ','}
                            </span>
                          }) : ' None'
                      }
                    </li>
                  </ul>
                </div>
              </div>
              <div className='column is-1'></div>
            </div>
          </div>
        </div>
      </div>

      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <HTMLContent content={post.html} />
              <BioCards names={post.frontmatter.bios}/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ClassPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ClassPage

export const pageQuery = graphql`
  query ClassPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        image
        summary
        target
        cost
        prereq {
          name
          link
        }
        bios
      }
    }
  }
`
