import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Segment } from 'semantic-ui-react'

import SEO from '../components/common/seo'
import Section from '../components/common/section'
import Layout from '../components/layout/layout'
import aboutSections from '../data/about/about-sections'

const About = () => (
  <Layout title="About">
    <SEO title="About" />
    <Segment basic textAlign="center">
      <StaticImage src="../images/arrow2nd-icon.png" alt="icon" width={200} />
      <h2>はじめまして、あろーです</h2>
    </Segment>
    <Segment basic>
      <Container text>
        <Section items={aboutSections} />
      </Container>
    </Segment>
  </Layout>
)

export default About
