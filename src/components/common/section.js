import * as React from 'react'
import PropTypes from 'prop-types'
import { Header, Segment } from 'semantic-ui-react'

const Section = ({ items }) => {
  const contents = items.map((e) => (
    <Segment basic textAlign="center" key={e.title}>
      <Header as="h3" content={e.title} />
      <p>{e.text}</p>
    </Segment>
  ))
  return <div>{contents}</div>
}

Section.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default Section
