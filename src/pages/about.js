import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'semantic-ui-react'

import SEO from '../components/common/seo'
import Title from '../components/common/title'
import Section from '../components/common/section'
import Layout from '../components/layout/layout'
import aboutSections from '../data/about/about-sections'

const About = () => (
  <Layout>
    <SEO title="About" />
    <Title name="About" />
    <Container text textAlign="center">
      <StaticImage src="../images/arrow2nd-icon.png" alt="icon" width={200} />
      <h2>はじめまして、あろーです</h2>
      <Section items={aboutSections} />
    </Container>
  </Layout>
)

export default About
