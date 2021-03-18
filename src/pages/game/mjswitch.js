import * as React from 'react'

import Detail from '../../components/detail/detail'

const images = [
  'works/game/mj_sw_1.jpg',
  'works/game/mj_sw_2.jpg',
  'works/game/mj_sw_3.jpg',
  'works/game/mj_sw_4.jpg'
]

const sections = [
  {
    title: '概要',
    text: 'プチコン4（Switch）で遊べる「初心者にやさしい」4人打ち麻雀ゲームです'
  },
  {
    title: 'ひとこと',
    text:
      'プレイ中でもみれる役図鑑や簡単な用語辞典など、とっつきやすい麻雀を目指して開発しました'
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
