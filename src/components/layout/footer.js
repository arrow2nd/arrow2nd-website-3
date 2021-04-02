import * as React from 'react'
import AccountLinks from '../common/account-links'

import * as Styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.buttons}>
        <AccountLinks />
      </div>
      <p className={Styles.copyright}>© {new Date().getFullYear()} arrow2nd</p>
    </footer>
  )
}

export default Footer
