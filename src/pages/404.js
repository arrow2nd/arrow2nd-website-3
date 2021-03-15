import * as React from 'react'
import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header
      as="h1"
      textAlign="center"
      content="Opps!"
      subheader="404 Notfound"
    />
  </Layout>
)

export default NotFoundPage
