import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = [
  'works/other/produce_1.png',
  'works/other/produce_2.png',
  'works/other/produce_3.png'
]

const sections = [
  {
    title: '概要',
    text:
      'アイドルマスターシリーズに登場するアイドルのプロフィールを検索できるLINEBotです'
  },
  {
    title: '特徴',
    text:
      '名前の一部やひらがなからでも検索できるので、うろ覚えでもみつけられます'
  },
  {
    title: '使用技術',
    text: 'Node.js / LINE Messaging API / im@sparql(SPARQL) / Vercel / CircleCI'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/linebot-imas'
  },
  {
    name: '友だち登録',
    icon: 'linechat',
    color: 'green',
    href: 'https://lin.ee/gsEi1Ik'
  }
]

const Produce = () => (
  <Detail
    category="other"
    title="プロデュースノート！"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Produce
