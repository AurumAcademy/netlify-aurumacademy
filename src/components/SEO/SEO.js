import React from 'react'
import config from '../../../config'
import Helmet from 'react-helmet'
import CoverImage from '../../assets/img/cover.png'

const SE0 = ({ title, meta_title, meta_desc }) => {

  const organizationSchema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    'logo': config.siteUrl + config.siteLogo,
    'url': config.siteUrl,
    'name': config.siteTitle,
    'telephone': config.phone,
    'email': config.email,
    'foundingDate': config.foundingDate,
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'support',
      'telephone': config.phone,
      'email': config.email
    },
   'sameAs': [
      "https://www.youtube.com/channel/UCRgNypiQlb4ays-dskK9Czg/"
		]
  }

  const breadcrumbSchema = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: config.siteUrl
      }
    ]
  }

  return (
    <Helmet>
      <title>{meta_title}</title>
      {/* General tags */}
      <meta name='description' content={meta_desc} />
      <meta name='image' content={CoverImage} />
      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(organizationSchema)}
        {/* {JSON.stringify(breadcrumbSchema)} */}
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
