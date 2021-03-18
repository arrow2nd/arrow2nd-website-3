import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
