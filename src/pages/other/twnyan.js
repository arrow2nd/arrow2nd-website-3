import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['other/twnyan-1.png', 'other/twnyan-2.png']

const sections = [
  {
    title: '概要',
    text: 'ターミナル上で動くシンプルなTwitterクライアントです'
  },
  {
    title: '特徴',
    text: '読むことに特化したデザイン / 疑似UserStreamモード搭載'
  },
  {
    title: 'にゃーん',
    text: '"twnyan tw" で「にゃーん」できます🐱'
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
