import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'works/game/syntax-1.png',
  'works/game/syntax-2.png',
  'works/game/syntax-3.png'
]

const sections = [
  {
    title: '概要',
    text: '文字のパネルを並び替えてプチコンの命令をつくるパズルゲームです'
  },
  {
    title: 'ひとこと',
    text: 'フリックやドラッグなど、タッチでの操作を意識して開発しました'
  },
  {
    title: '公開キー',
    text: '4VKS8XDEF'
  }
]

const links = [
  {
    name: '投稿ツイートをみる',
    icon: 'twitter',
    color: 'twitter',
    href: 'https://twitter.com/arrow_2nd/status/1297872774577262593'
  }
]

const Syntax = () => (
  <Detail
    category="game"
    title="#syntax"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Syntax
