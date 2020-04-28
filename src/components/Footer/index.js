import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import config from '../../../config'

const Footer = () => (
  <StaticQuery
    query={
      graphql`
        query FooterQuery {
          imageSharp(fixed: {originalName: {eq: "goldengears.png"}}) {
            fixed(height: 100, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      `
    }
    render={(data) => (
      <footer className='footer is-dark'>
        <div className='content'>

          <section className='section no-pad-top'>

            <div className='columns'>
              <div className='column'>
                <h3 className='has-text-white'>Contact</h3>
                <p>
                  <Link className='button is-primary is-outlined' to='/contact'>
                    Send a message
                  </Link>
                </p>
                  <p><a href={`mailto:${config.email}`}>{config.email}</a></p>
                  <p><a href={`tel:${config.phone}`}>{config.phone}</a></p>

              </div>

              <div className='column'>
                <h3 className='has-text-white'>Company</h3>
                <p><Link to='/about'>About</Link></p>
                <p><Link to='/blog'>Blog</Link></p>
                <p><Link to='/legal/terms'>Terms and Conditions</Link></p>
                <p><Link to='/legal/privacy'>Privacy Policy</Link></p>
              </div>

              <div className='column'>
                <p>Aurum Academy is associated with</p>
                <a href='https://goldengears.gq'>
                  <Img fixed={data.imageSharp.fixed} className='footer-logo' alt='Golden Gears'/>
                </a>
              </div>
            </div>

          </section>

          <p className='has-text-centered'>{config.copyright}</p>

        </div>
      </footer>
    )}
  />
)


export default Footer
