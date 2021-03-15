import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Menu } from 'semantic-ui-react'

import * as Styles from './header.module.css'

const MenuItem = (name, to) => (
  <Menu.Item>
    <Link className={Styles.link} to={to}>
      {name}
    </Link>
  </Menu.Item>
)

const Header = () => (
  <Menu className={Styles.navbar} secondary>
    <Menu.Item>
      <Link to="/">
        <StaticImage
          src="../images/arrow2nd-icon.png"
          width={48}
          formats={['webp']}
          alt="icon"
        />
      </Link>
    </Menu.Item>
    <Menu.Menu position="right">
      {MenuItem('About', '/about')}
      {MenuItem('Works', '/works')}
    </Menu.Menu>
  </Menu>
)

export default Header
