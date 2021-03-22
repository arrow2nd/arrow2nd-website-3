import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = ['works/sticker/more-cat-1.png', 'works/sticker/more-cat-2.png']

const sections = [
  {
    title: '概要',
    text: 'ふっくらしたねこの ちょっと使いやすいスタンプです'
  },
  {
    title: 'ひとこと',
    text: '「Yes!」と「No...」のスタンプが好きです'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/12664864'
  }
]

const MoreCat = () => (
  <Detail
    category="sticker"
    title="もっと！ねこのようなもの。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default MoreCat
