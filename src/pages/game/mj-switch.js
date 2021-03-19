import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = [
  'works/game/mj-sw-1.png',
  'works/game/mj-sw-2.png',
  'works/game/mj-sw-3.png',
  'works/game/mj-sw-4.png',
  'works/game/mj-sw-5.png'
]

const sections = [
  {
    title: '概要',
    text: 'プチコン4（Switch）で遊べる「初心者にやさしい」4人打ち麻雀ゲームです'
  },
  {
    title: '特徴',
    text:
      '捨てる牌をおすすめしてくれる機能や ねこの見た目/思考をカスタムできる機能があります'
  },

  {
    title: 'ひとこと',
    text:
      'プレイ中でもみれる役図鑑や用語辞典など とっつきやすい麻雀を目指して開発しました'
  },
  {
    title: '公開キー',
    text: '4NZS5D323'
  }
]

const links = [
  {
    name: 'プチコンまとめWiki',
    icon: 'linkify',
    color: 'teal',
    href:
      'http://wiki.hosiken.jp/petc4/?Toukou%2F%A4%DE%A1%BC%A4%B8%A4%E3%A4%F3%A4%CE%A4%E8%A4%A6%A4%CA%A4%E2%A4%CE%A1%A3for%20Switch'
  }
]

const MjSwitch = () => (
  <Detail
    category="game"
    title="まーじゃんのようなもの。for Switch"
    images={images}
    sections={sections}
    links={links}
  />
)

export default MjSwitch
