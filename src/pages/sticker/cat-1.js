import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['works/sticker/cat-1-1.png', 'works/sticker/cat-1-2.png']

const sections = [
  {
    title: '概要',
    text: 'あいさつから返信まで 割と使えるかもしれないスタンプです'
  },
  {
    title: 'ひとこと',
    text: '日常会話で使いやすい語彙が揃っています'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/5233786'
  }
]

const Cat1 = () => (
  <Detail
    category="sticker"
    title="ねこのようなもの。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Cat1
