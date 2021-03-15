import * as React from 'react'
import { Button } from 'semantic-ui-react'

import * as Styles from './footer.module.css'

const button = (color, icon, href) => (
  <Button
    circular
    color={color}
    icon={icon}
    href={href}
    target="_blank"
    rel="noopener"
  />
)

const footer = () => (
  <footer className={Styles.footer}>
    <div className={Styles.links}>
      {button('twitter', 'twitter', 'https://twitter.com/arrow_2nd')}
      {button('blue', 'at', 'https://imastodon.net/@arrow2nd')}
      {button('black', 'github', 'https://github.com/arrow2nd')}
    </div>
    <div>© {new Date().getFullYear()} arrow2nd</div>
  </footer>
)

export default footer
