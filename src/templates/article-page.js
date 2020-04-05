import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Content from '../components/Content'
import { Link } from 'gatsby'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash'

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  const {title, meta_title, meta_description, cover, date, content, tags} = post.frontmatter
  const PostContent = HTMLContent || Content

  return (
    <Layout title={title} description={meta_description}>
      <section className='section'>
        <SE0
          title={title}
          meta_title={meta_title}
          meta_desc={meta_description}
          cover={cover}
          slug={post.fields.slug}
          date={date}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>

              <div>
                <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
                  {title}
                </h1>
                <img src={cover} alt={title} />
                <PostContent content={content} />
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className='taglist'>
                    {(tags && tags.length)
                      ? tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))
                      : null}
                  </ul>
                </div>
              </div>

              <hr />

              <Disqus
                title={post.frontmatter.title}
                slug={post.fields.slug}
              />

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        tags
      }
    }
  }
`
