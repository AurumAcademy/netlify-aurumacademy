import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Footer from '../Footer'
import config from '../../../config'
import PrivateNavBar from '../Nav/PrivateNavBar'
import '../../assets/sass/styles.sass'

class PrivateLayout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    let title = this.props.title ? this.props.title+' | '+config.siteTitle : config.siteTitle
    let description = this.props.description ? this.props.description : config.siteDescription
    return (
      <div id='layout-wrapper'>
        <Helmet>
          <title>{title}</title>
          <meta name='title' content={title} />
          <meta name='description' content={description} />
          <meta name='copyright' content={config.copyright} />
          <meta name='url' content={config.siteUrl} />
        </Helmet>
        <PrivateNavBar/>
        <div id='content-wrapper' className='has-light-background'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

}

export default PrivateLayout
