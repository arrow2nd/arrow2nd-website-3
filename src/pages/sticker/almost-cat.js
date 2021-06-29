import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['sticker/almost-cat-1.png', 'sticker/almost-cat-2.png']

const sections = [
  {
    title: '概要',
    text: 'あんまり使うと多分ブロックされる ちょっと口が悪いねこのスタンプです'
  },
  {
    title: 'ひとこと',
    text: 'はじめてリジェクトされました！'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/10319642'
  }
]

const AlmostCat = () => (
  <Detail
    category="sticker"
    title="だいたいねこのようなもの"
    images={images}
    sections={sections}
    links={links}
  />
)

export default AlmostCat
