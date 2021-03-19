import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = ['works/sticker/cat-2-1.png', 'works/sticker/cat-2-2.png']

const sections = [
  {
    title: '概要',
    text: '色んなシーンで使える（？） 5匹のねこのごちゃまぜスタンプです'
  },
  {
    title: 'ひとこと',
    text: '「うに。」が一番人気です'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/6419151'
  }
]

const Cat2 = () => (
  <Detail
    category="sticker"
    title="ねこのようなもの。2"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Cat2
