import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['works/sticker/prog-cat-1.png', 'works/sticker/prog-cat-2.png']

const sections = [
  {
    title: '概要',
    text: '「進捗を聞く」「進捗を伝える」ことに特化した ねこのスタンプです'
  },
  {
    title: 'ひとこと',
    text: 'やさしく進捗を聞いてほしかったので作りました'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/7224768'
  }
]

const ProgressCat = () => (
  <Detail
    category="sticker"
    title="進捗とたたかうねこ。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default ProgressCat
