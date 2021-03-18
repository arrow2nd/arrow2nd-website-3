import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = [
  'works/game/syntax_1.jpg',
  'works/game/syntax_2.jpg',
  'works/game/syntax_3.jpg'
]

const sections = [
  {
    title: '概要',
    text: '文字のパネルを並び替えてプチコンの命令をつくるパズルゲームです'
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
