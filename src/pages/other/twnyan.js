import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = ['works/other/twnyan-1.png', 'works/other/twnyan-2.png']

const sections = [
  {
    title: '概要',
    text: 'ターミナル上で動くシンプルなTwitterクライアントです'
  },
  {
    title: 'にゃーん',
    text: 'いつでもどこでも コマンド2つで「にゃーん」できます'
  },
  {
    title: '使用技術',
    text: 'Go / Twitter API / CircleCI'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/twnyan'
  }
]

const Twnyan = () => (
  <Detail
    category="other"
    title="twnyan"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Twnyan
