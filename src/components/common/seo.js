/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defalutTitle: title
            titleTemplate
            defalutDescription: description
            siteUrl: url
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
    defalutDescription,
    siteUrl,
    defaultImage,
    twitterUsername
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defalutDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="ja" />
      <meta charset="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.image} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: ``,
  description: ``,
  image: ``,
  article: false
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool
}

export default SEO
