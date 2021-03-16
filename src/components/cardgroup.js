import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Card as SUCard } from 'semantic-ui-react'

const CardGroup = ({ items }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: allFile {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const cards = items.map((item) => {
    const node = image.edges.find((e) => e.relativePath === item.filename)?.node
    if (!node) return null
    const imageData = getImage(node)
    return (
      <SUCard key={node.id} href={item.href}>
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
    iamge: ``,
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
