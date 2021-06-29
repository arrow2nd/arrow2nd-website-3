import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['sticker/dog-1.png', 'sticker/dog-2.png']

const sections = [
  {
    title: '概要',
    text: 'いぬのような……なにかのスタンプです'
  },
  {
    title: 'ひとこと',
    text: '🐶'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/8527524'
  }
]

const Dog = () => (
  <Detail
    category="sticker"
    title="いぬだと思います。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Dog
