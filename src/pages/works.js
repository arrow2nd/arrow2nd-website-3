import * as React from 'react'
import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Works" />
    <Header as="h1" textAlign="center" content="Works" subheader="test" />
  </Layout>
)

export default SecondPage
