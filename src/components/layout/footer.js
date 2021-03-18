import * as React from 'react'
import { Button } from 'semantic-ui-react'

import linkButtonData from '../../data/link-button-data'
import * as Styles from './footer.module.css'

const Footer = () => {
  const buttons = linkButtonData.map((e) => (
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
      <p>© {new Date().getFullYear()} arrow2nd</p>
    </footer>
  )
}

export default Footer
