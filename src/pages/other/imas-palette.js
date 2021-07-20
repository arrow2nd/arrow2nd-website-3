import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'other/imas-palette-1.png',
  'other/imas-palette-2.png',
  'other/imas-palette-3.png'
]

const sections = [
  {
    title: '概要',
    text: 'THE IDOLM@STERシリーズに登場するアイドルの個人カラーが検索できるWebアプリです'
  },
  {
    title: '特徴',
    text: 'よく使うアイドルのカラーを「Keep」しておくことができます'
  },
  {
    title: '使用技術',
    text: 'Next.js / TypeScript / Tailwindcss / im@sparql(SPARQL) / Vercel'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/imas-palette'
  },
  {
    name: 'サイトを見る',
    icon: 'external alternate',
    color: 'twitter',
    href: 'https://imas-palette.vercel.app/'
  }
]

const imasPalette = () => (
  <Detail
    category="other"
    title="im@s-palette"
    images={images}
    sections={sections}
    links={links}
  />
)

export default imasPalette
