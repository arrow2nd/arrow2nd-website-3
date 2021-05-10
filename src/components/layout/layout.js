import { Container } from 'semantic-ui-react'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

const Layout = ({ title, children }) => (
  <>
    <Header title={title} />
    <Container>
      <main>{children}</main>
    </Container>
    <Footer />
  </>
)

Layout.defaultProps = {
  title: ''
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Layout
