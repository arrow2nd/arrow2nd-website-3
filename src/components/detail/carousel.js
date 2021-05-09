import * as React from 'react'
import * as Styles from './carousel.module.css'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container } from 'semantic-ui-react'
import { useImage } from '../common/useImage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ items }) => {
  const images = useImage()

  const carouselImages = items.map((filename, idx) => {
    const image = images.find((e) => e.node.relativePath === filename)
    if (!image) return null

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
    <Container className={Styles.carousel} text>
      <Slider
        arrows={false}
        dots
        infinite
        autoplay
        autoplaySpeed={4000}
        speed={600}
      >
        {carouselImages}
      </Slider>
    </Container>
  )
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}

export default Carousel
