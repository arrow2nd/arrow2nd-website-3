import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Header, Button } from 'semantic-ui-react'

import SEO from '../common/seo'
import Section from '../common/section'
import Layout from '../layout/layout'
import Carousel from './carousel'
import Links from './links'
import { useSeoImage } from './useSeoImage'

import * as Styles from './detail.module.css'

const Detail = ({ category, title, desc, images, sections, links }) => {
  const seoImage = useSeoImage(images[0])
  return (
    <Layout>
      <SEO title={title} desc={desc} image={seoImage} article />
      <div className={Styles.title}>
        <Carousel items={images} />
        <Header as="h2" content={title} textAlign="center" />
        <div className={Styles.hr} />
      </div>
      <Section items={sections} />
      <Links items={links} />
      <Button
        className={Styles.backButton}
        circular
        icon="angle left"
        content="Back"
        as={Link}
        to={`/category/${category}`}
      />
    </Layout>
  )
}

Detail.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  sections: PropTypes.array.isRequired,
  links: PropTypes.array
}

export default Detail
