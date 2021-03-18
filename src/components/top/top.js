import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Button, Segment, Grid } from 'semantic-ui-react'

import SEO from '../common/seo'
import Title from '../common/title'
import Footer from '../layout/footer'
import pageLinks from '../../data/page-links'

import * as Styles from './top.module.css'

const Top = () => {
  const buttons = pageLinks.map((e) => (
    <Grid.Column className={Styles.column} key={e.name}>
      <Button
        circular
        animated="fade"
        className={Styles.button}
        as={Link}
        to={e.to}
      >
        <Button.Content visible content={e.name} />
        <Button.Content hidden content={e.desc} />
      </Button>
    </Grid.Column>
  ))

  return (
    <div className={Styles.outer}>
      <SEO />
      <Segment className={Styles.segment} basic>
        <StaticImage
          className={Styles.image}
          src="../../images/arrow2nd-icon.png"
          alt="icon"
          width={200}
        />
        <Title name="arrow2nd" as="h2" />
        <Grid columns={1}>{buttons}</Grid>
        <Footer />
      </Segment>
    </div>
  )
}

export default Top
