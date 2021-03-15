import * as React from 'react'
import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Header as="h1" textAlign="center" content="About" subheader="予定地" />
  </Layout>
)

export default SecondPage
