import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import { Header, Container } from 'semantic-ui-react'

import SEO from '../common/seo'
import Layout from '../layout/layout'
import { useImage } from '../common/useImage'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as Styles from './work.module.css'

const Work = ({ title, desc, items, children }) => {
  const images = useImage()

  const ogpImage = getSrc(
    images.find((e) => e.node.relativePath === items[0]).node
  )

  const carouselImages = items.map((filename, idx) => {
    const image = images.find((e) => e.node.relativePath === filename)
    const imageData = getImage(image.node)
    return (
      <div key={filename}>
        <GatsbyImage
          image={imageData}
          alt={`画像 ${idx + 1}`}
          loading="eager"
        />
      </div>
    )
  })

  return (
    <Layout>
      <SEO title={title} desc={desc} image={ogpImage} article />
      <Container text>
        <div className={Styles.carousel}>
          <Slider dots infinite autoplay autoplaySpeed={4000} speed={600}>
            {carouselImages}
          </Slider>
        </div>
      </Container>
      <Header as="h1" content={title} subheader={desc} textAlign="center" />
      {children}
    </Layout>
  )
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node
}

export default Work
