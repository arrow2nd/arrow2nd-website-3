import { Button, Segment, Grid } from 'semantic-ui-react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import * as Styles from './top.module.css'
import SEO from '../common/seo'
import Title from '../common/title'
import AccountLinks from '../common/account-links'
import pageLinks from '../../data/common/page-links'

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
        <div className={Styles.title}>
          <Title name="arrow2nd" as="h2" />
        </div>
        <Grid className={Styles.buttons} columns={1}>
          {buttons}
        </Grid>
        <div className={Styles.links}>
          <AccountLinks />
        </div>
      </Segment>
    </div>
  )
}

export default Top
