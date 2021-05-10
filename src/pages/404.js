import { Header, Segment } from 'semantic-ui-react'
import * as React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/common/seo'
import Title from '../components/common/title'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <Title name="Oops!" />
    <Segment basic textAlign="center">
      <Header
        as="h2"
        content="ページが見つかりませんでした"
        subheader="404 Not Found 😿"
      />
    </Segment>
  </Layout>
)

export default NotFoundPage
