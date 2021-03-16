import * as React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import * as Styles from './title.module.css'

const Title = ({ name, subtext }) => (
  <div className={Styles.title}>
    <Header as="h1" textAlign="center" content={name} subheader={subtext} />
  </div>
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
