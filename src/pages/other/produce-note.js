import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'other/produce-1.png',
  'other/produce-2.png',
  'other/produce-3.png'
]

const sections = [
  {
    title: '概要',
    text: 'アイドルマスターシリーズに登場するアイドルのプロフィールを検索できるLINEBotです'
  },
  {
    title: '特徴',
    text: '名前の一部や読み（ひらがな）からなどのうろ覚え検索や、誕生日からの検索もできます'
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
