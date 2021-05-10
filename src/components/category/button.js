import { Button as SUButton } from 'semantic-ui-react'
import { Link } from 'gatsby'
import * as React from 'react'
import * as Styles from './button.module.css'
import PropTypes from 'prop-types'
import categoryButtons from '../../data/common/category-buttons'

const Button = ({ active }) => {
  const buttons = categoryButtons.map((e) => (
    <SUButton
      key={e.name}
      circular
      active={e.name === active}
      size="small"
      as={Link}
      to={e.to}
      content={e.name}
    />
  ))

  return <div className={Styles.buttons}>{buttons}</div>
}

Button.protoTypes = {
  active: PropTypes.string.isRequired
}

export default Button
