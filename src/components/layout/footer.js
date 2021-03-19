import * as React from 'react'
import { Button } from 'semantic-ui-react'

import linkButtons from '../../data/common/link-buttons'
import * as Styles from './footer.module.css'

const Footer = () => {
  const buttons = linkButtons.map((e) => (
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
      <p className={Styles.copyright}>© {new Date().getFullYear()} arrow2nd</p>
    </footer>
  )
}

export default Footer
