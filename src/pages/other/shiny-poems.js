import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'works/other/shiny-poems-1.png',
  'works/other/shiny-poems-2.png',
  'works/other/shiny-poems-3.png',
  'works/other/shiny-poems-4.png'
]

const sections = [
  {
    title: '概要',
    text: 'シャイニーカラーズの衣装説明（ポエム）の検索・共有ができるサイトです'
  },
  {
    title: '使用技術',
    text:
      'Next.js / TypeScript / Tailwindcss / Cloudinary / im@sparql(SPARQL) / Vercel'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/shiny-poems'
  },
  {
    name: 'サイトを見る',
    icon: 'external alternate',
    color: 'twitter',
    href: 'https://shiny-poems.vercel.app/'
  }
]

const shinyPoems = () => (
  <Detail
    category="other"
    title="ShinyPoems"
    images={images}
    sections={sections}
    links={links}
  />
)

export default shinyPoems
