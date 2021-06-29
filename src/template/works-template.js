import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['/-1.png', '/-2.png', '/-3.png', '/-4.png']

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
