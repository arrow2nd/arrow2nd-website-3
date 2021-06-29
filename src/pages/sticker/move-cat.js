import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['sticker/move-cat-1.png', 'sticker/move-cat-2.png']

const sections = [
  {
    title: '概要',
    text: 'よくうごく クレヨン風のねこのスタンプです'
  },
  {
    title: 'ひとこと',
    text: 'よく動きます🐱'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/7982358'
  }
]

const MoveCat = () => (
  <Detail
    category="sticker"
    title="うごく！ねこのようなもの。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default MoveCat
