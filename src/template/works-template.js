import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = [
  'works//-1.png',
  'works//-2.png',
  'works//-3.png',
  'works//-4.png'
]

const sections = [
  {
    title: '概要',
    text: ''
  },
  {
    title: '使用技術',
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
    images={images}
    sections={sections}
    links={links}
  />
)

export default Page
