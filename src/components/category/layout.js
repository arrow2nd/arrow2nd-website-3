import * as React from 'react'
import PropTypes from 'prop-types'

import Layout from '../layout'
import SEO from '../seo'
import Title from '../title'
import Button from './button'
import CardGroup from './cardgroup'

const WLayout = ({ title, items }) => (
  <Layout>
    <SEO title={title} />
    <Title name="Works" subtext="test" />
    <Button active={title} />
    <CardGroup items={items} />
  </Layout>
)

WLayout.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
}

export default WLayout
