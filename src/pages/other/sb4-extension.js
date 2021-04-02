import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = [
  'works/other/sb4ext-1.png',
  'works/other/sb4ext-2.png',
  'works/other/sb4ext-3.png'
]

const sections = [
  {
    title: '概要',
    text: 'SmileBASIC4（プチコン4）のコードをVSCodeで書くための拡張機能です'
  },
  {
    title: '使用技術',
    text: 'Node.js / TypeScript'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/sb4-extension'
  },
  {
    name: '配布ページ',
    icon: 'microsoft',
    color: 'blue',
    href:
      'https://marketplace.visualstudio.com/items?itemName=arrow2nd.sb4-extension'
  }
]

const SB4ext = () => (
  <Detail
    category="other"
    title="sb4-extension"
    images={images}
    sections={sections}
    links={links}
  />
)

export default SB4ext
