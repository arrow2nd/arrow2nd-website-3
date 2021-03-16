import * as React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import * as Styles from './title.module.css'

const Title = ({ name, subtext }) => (
  <Header
    className={Styles.title}
    as="h1"
    textAlign="center"
    content={name}
    subheader={subtext}
  />
)

Title.defaultProps = {
  name: ``,
  subtext: ``
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  subtext: PropTypes.string
}

export default Title
