import * as React from 'react'
import { Button } from 'semantic-ui-react'

import * as Styles from './footer.module.css'

const links = [
  {
    icon: 'twitter',
    color: 'twitter',
    href: 'https://twitter.com/arrow_2nd'
  },
  {
    icon: 'at',
    color: 'blue',
    href: 'https://imastodon.net/@arrow2nd'
  },
  {
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd'
  }
]

const Footer = () => {
  const buttons = links.map((e) => (
    <Button
      key={e.icon}
      circular
      color={e.color}
      icon={e.icon}
      href={e.href}
      target="_blank"
      rel="noopener"
    />
  ))

  return (
    <footer className={Styles.footer}>
      <div className={Styles.buttons}>{buttons}</div>
      <div>© {new Date().getFullYear()} arrow2nd</div>
    </footer>
  )
}

export default Footer
