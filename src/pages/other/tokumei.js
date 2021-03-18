import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = ['works/other/tokumei_1.png', 'works/other/tokumei_2.png']

const sections = [
  {
    title: '概要',
    text: 'Web メディア「オモコロ」のラジオを再生する非公式のソフトウェアです'
  },
  {
    title: '使用技術',
    text: 'Electron / React.js / TypeScript / webpack / Github Actions'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/tokumei-player-plus'
  },
  {
    name: 'ダウンロード',
    icon: 'download',
    color: 'blue',
    href: 'https://github.com/arrow2nd/tokumei-player-plus/releases'
  }
]

const Tokumei = () => (
  <Detail
    category="other"
    title="匿名Player+"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Tokumei
