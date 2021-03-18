import * as React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import * as Styles from './links.module.css'

const Links = ({ items }) => {
  const contents = items.map((e) => (
    <Button
      key={e.name}
      circular
      icon={e.icon}
      color={e.color}
      content={e.name}
      as="a"
      href={e.href}
      target="_blank"
      rel="noopener"
    />
  ))
  return <div className={Styles.buttons}>{contents}</div>
}

Links.defaultProps = {
  items: {
    name: '',
    icon: '',
    color: '',
    href: ''
  }
}

Links.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      href: PropTypes.string.isRequired
    })
  )
}

export default Links
