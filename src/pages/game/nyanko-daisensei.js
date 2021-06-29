import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'game/nyanko-1.png',
  'game/nyanko-2.png',
  'game/nyanko-3.png',
  'game/nyanko-4.png'
]

const sections = [
  {
    title: '概要',
    text: '問題とその答えが合っているかどうか、すばやく『シュッ』と採点する脳トレゲームです'
  },
  {
    title: 'コンテスト',
    text: '第五回プチコン大喜利 TSUKUMO賞を頂きました'
  },
  {
    title: '公開キー',
    text: '4NKEKN4XS'
  }
]

const links = [
  {
    name: '投稿ツイートをみる',
    icon: 'twitter',
    color: 'twitter',
    href: 'https://twitter.com/arrow_2nd/status/1214409406026153984'
  }
]

const Nyanko = () => (
  <Detail
    category="game"
    title="にゃんこだいせんせぇ"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Nyanko
