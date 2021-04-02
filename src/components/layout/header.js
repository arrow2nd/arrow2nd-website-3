import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Menu } from 'semantic-ui-react'

import Title from '../common/title'
import pageLinks from '../../data/common/page-links'
import * as Styles from './header.module.css'

const Header = ({ title }) => {
  const items = pageLinks.map((item) => (
    <Menu.Item key={item.name}>
      <Link className={Styles.link} to={item.to}>
        {item.name}
      </Link>
    </Menu.Item>
  ))

  return (
    <div className={Styles.header}>
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
      {title && (
        <div className={Styles.title}>
          <Title name={title} />
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
