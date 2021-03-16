import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Card as SUCard } from 'semantic-ui-react'

import { useImage } from '../common/useImage'

const CardGroup = ({ items }) => {
  const images = useImage()

  const cards = items.map((item) => {
    const image = images.find((e) => e.node.relativePath === item.image)
    if (!image) return null
    const imageData = getImage(image.node)
    return (
      <SUCard key={item.image} href={item.href}>
        <GatsbyImage image={imageData} alt={item.title} />
        <SUCard.Content>
          <SUCard.Header content={item.title} />
          <SUCard.Description content={item.desc} />
        </SUCard.Content>
      </SUCard>
    )
  })

  return (
    <SUCard.Group stackable itemsPerRow={3}>
      {cards}
    </SUCard.Group>
  )
}

CardGroup.defaultProps = {
  items: {
    title: ``,
    desc: ``,
    image: ``,
    href: ``
  }
}

CardGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
}

export default CardGroup
