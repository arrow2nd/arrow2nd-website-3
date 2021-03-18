import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Menu } from 'semantic-ui-react'

import menuItemData from '../../data/menu-item-data'
import * as Styles from './header.module.css'

const Header = () => {
  const items = menuItemData.map((item) => (
    <Menu.Item key={item.name}>
      <Link className={Styles.link} to={item.to}>
        {item.name}
      </Link>
    </Menu.Item>
  ))

  return (
    <Menu className={Styles.navbar} secondary>
      <Menu.Item>
        <Link to="/">
          <StaticImage
            src="../../images/arrow2nd-icon.png"
            width={48}
            alt="icon"
          />
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">{items}</Menu.Menu>
    </Menu>
  )
}

export default Header
