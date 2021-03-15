import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
