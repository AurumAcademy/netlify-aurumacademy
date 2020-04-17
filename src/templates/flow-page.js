import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { HTMLContent } from '../components/Content'
import { ArcherContainer, ArcherElement } from 'react-archer'
import Plans from '../components/forms/PlanForm/Plans'

const FlowPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title={post.frontmatter.title}>
      <div className='hero is-medium is-accent'>
        <div className='hero-body has-align-bottom'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                  <h1 className='is-size-1 has-text-weight-semibold  is-align-bottom has-text-centered'>
                    {post.frontmatter.title}
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <section className='section no-pad-top'>
                <HTMLContent content={post.html} />
              </section>
              <section className='section'>
                <Plans/>
              </section>


    <section className='section'>
      <ArcherContainer strokeColor='#999999' >
 
        <div className='archer-row'>

          <ArcherElement
            id="mech1"
            relations={[{
              targetId: 'robo1',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: {strokeColor:'#ffd900'}
            }]}
          >
            <Link to='/classes/mech-prototyping'>
              <div className='box flow-box is-mech'>
                Mechanism Prototyping
              </div>
            </Link>
          </ArcherElement>

          <ArcherElement
            id="code1"
            relations={[{
              targetId: 'code2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: {strokeColor:'#ff3388'}
            }, {
              targetId: 'robo1',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: {strokeColor:'#ffa600'}
            }]}
          >
            <Link to='/classes/program-principles'>
              <div className='box flow-box is-code'>
                Programming Principles
              </div>
            </Link>
          </ArcherElement>
 

        </div>

{/* $gold: #ffd900
$tang: #ffa600
$pink: #ff3388 */}
 
        <div className='archer-row'>

          <ArcherElement
            id="robo1"
            relations={[{
              targetId: 'robo2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: {strokeColor:'#ffa600'}
            }]}
          >

            <Link to='/classes/robotics-intro'>
              <div className='box flow-box is-robo'>
                Intro to Robotics
              </div>
            </Link>
          </ArcherElement>

          <ArcherElement
            id="code2"
            relations={[]}
          >
            <Link to='/classes/project-code'>
              <div className='box flow-box is-code'>
                Project Code
              </div>
            </Link>
          </ArcherElement>

        </div>

        <div className='archer-row'>

          <ArcherElement
            id="robo2"
            relations={[]}
          >
            <Link to='/classes/robotics-expanded'>
              <div className='box flow-box is-robo'>
                Robotics Expanded
              </div>
            </Link>
          </ArcherElement>

        </div>

      </ArcherContainer>
    </section>



              {/* {
                post.frontmatter.flow.map(row => {
                  return (
                    <div className='columns'>
                    {
                      row.node.map(node => {
                        return (
                          <div className='column'>
                            <div className='box'>
                              <h2 className='has-text-centered'>{node.title}</h2>
                              {node.text}
                            </div>
                          </div>
                        )
                      })
                    }
                    </div>
                  )
                })
              } */}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

FlowPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FlowPage 

export const pageQuery = graphql`
  query FlowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        flow {
          node {
            title
            text
          }
        }
      }
    }
  }
`
