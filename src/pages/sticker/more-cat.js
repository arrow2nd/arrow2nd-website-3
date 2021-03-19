import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = ['works/sticker/more-cat-1.png', 'works/sticker/more-cat-2.png']

const sections = [
  {
    title: '概要',
    text: '文字が少なめなのでちょっと使いやすい ねこのスタンプです'
  },
  {
    title: 'ひとこと',
    text: '「Yes!」と「No...」のスタンプがイチオシです'
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
