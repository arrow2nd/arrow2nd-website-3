import { Header } from 'semantic-ui-react'
import * as React from 'react'
import * as Styles from './title.module.css'
import PropTypes from 'prop-types'

const Title = ({ name, as }) => (
  <div className={Styles.title}>
    <Header as={as} textAlign="center" content={name} />
    <div className={Styles.hr} />
  </div>
)

Title.defaultProps = {
  name: '',
  as: 'h1'
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  as: PropTypes.string
}

export default Title
