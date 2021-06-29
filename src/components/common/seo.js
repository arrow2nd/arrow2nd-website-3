/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import PropTypes from 'prop-types'

const Seo = ({ title, desc, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            originUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    originUrl,
    defaultImage,
    twitterUsername
  } = site.siteMetadata

  // URL末尾のスラッシュを削除
  const siteUrl = originUrl.slice(0, -1)

  const seo = {
    title: title || defaultTitle,
    ogpTitle: title ? titleTemplate.replace(/%s/, title) : defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={title ? titleTemplate : ''}>
      <html lang="ja" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.ogpTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.ogpTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

Seo.defaultProps = {
  title: '',
  image: '',
  desc: '',
  article: false
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  desc: PropTypes.string,
  article: PropTypes.bool
}

export default Seo
