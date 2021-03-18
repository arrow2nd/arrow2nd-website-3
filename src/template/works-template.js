import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = ['path/to/image']

const sections = [
  {
    title: '',
    text: ''
  }
]

const links = [
  {
    name: '',
    icon: '',
    color: '',
    href: ''
  }
]

const Page = () => (
  <Detail
    category=""
    title=""
    desc=""
    images={images}
    sections={sections}
    links={links}
  />
)

export default Page
