import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button as SUButton } from 'semantic-ui-react'

import * as Styles from './button.module.css'

const categories = [
  {
    name: 'Game',
    link: '/category/game'
  },
  {
    name: 'Tool',
    link: '/category/tool'
  },
  {
    name: 'LINE Sticker',
    link: '/category/sticker'
  }
]

const Button = ({ active }) => {
  const buttons = categories.map((e) => (
    <SUButton
      key={e.name}
      circular
      active={e.name === active}
      size="small"
      as={Link}
      to={e.link}
      content={e.name}
    />
  ))

  return <div className={Styles.categories}>{buttons}</div>
}

Button.protoTypes = {
  active: PropTypes.string.isRequired
}

export default Button
