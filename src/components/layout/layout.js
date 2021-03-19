import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

import Header from './header'
import Footer from './footer'

import * as Styles from './layout.module.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <Container className={Styles.container}>
      <main>{children}</main>
    </Container>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
