import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'works/game/mj-3ds-1.png',
  'works/game/mj-3ds-2.png',
  'works/game/mj-3ds-3.png',
  'works/game/mj-3ds-4.png'
]

const sections = [
  {
    title: '概要',
    text: 'プチコン3号（3DS）で遊べる 4人打ち麻雀ゲームです'
  },
  {
    title: '特徴',
    text: '比較的マイナーなローカル役も採用しています（個別にON/OFF可能）'
  },
  {
    title: '公開キー',
    text: '4BL47E4V'
  }
]

const links = [
  {
    name: 'プチコンまとめWiki',
    icon: 'linkify',
    color: 'teal',
    href:
      'http://wiki.hosiken.jp/petc3gou/?Toukou%2F4%BF%CD%C2%C7%A4%C1%CB%E3%BF%FD%A5%B2%A1%BC%A5%E0%A1%D8%A4%DE%A1%BC%A4%B8%A4%E3%A4%F3%A4%CE%A4%E8%A4%A6%A4%CA%A4%E2%A4%CE%A1%A3%A1%D9'
  }
]

const Mj3ds = () => (
  <Detail
    category="game"
    title="まーじゃんのようなもの。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Mj3ds
