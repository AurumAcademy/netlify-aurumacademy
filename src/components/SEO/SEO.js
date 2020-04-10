import React from 'react'
import config from '../../../config'
import Helmet from 'react-helmet'
import CoverImage from '../../assets/img/cover.png'

const SE0 = ({ title, meta_title, meta_desc }) => {
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

  const breadcrumbSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': config.siteUrl,
          name: 'Home',
          image: config.siteUrl + '/icons/icon-512x512.png',
        },
      },
    ],
  }

  return (
    <Helmet>
      <title>{meta_title}</title>
      {/* General tags */}
      <meta name='description' content={meta_desc} />
      <meta name='image' content={CoverImage} />
      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
      </script>
      {/* OpenGraph tags */}
      <meta property='og:url' content={config.siteUrl} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={meta_desc} />
      <meta property='og:image' content={CoverImage} />
    </Helmet>
  )
}

export default SE0
