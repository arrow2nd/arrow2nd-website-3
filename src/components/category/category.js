import * as React from 'react'
import PropTypes from 'prop-types'

import Layout from '../layout/layout'
import SEO from '../common/seo'
import Title from '../common/title'
import Button from './button'
import CardGroup from './cardgroup'

const Category = ({ title, cards }) => (
  <Layout>
    <SEO title={title} />
    <Title name="Works" subtext="test" />
    <Button active={title} />
    <CardGroup items={cards} />
  </Layout>
)

Category.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array
}

export default Category
