import * as React from 'react'

import Detail from '../components/detail/detail'

const images = [
  'works//_1.jpg',
  'works//_2.jpg',
  'works//_3.jpg',
  'works//_4.jpg'
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
