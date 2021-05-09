import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'works/other/arrow2nd-github-io-1.png',
  'works/other/arrow2nd-github-io-2.png',
  'works/other/arrow2nd-github-io-3.png'
]

const sections = [
  {
    title: '概要',
    text: '今までに作ったものをまとめたページです'
  },
  {
    title: '使用技術',
    text: 'Gatsby / TypeScript / Semantic UI / React Slick / Github Actions'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/arrow2nd.github.io'
  }
]

const arrow2ndGithubIo = () => (
  <Detail
    category="other"
    title="arrow2nd.github.io"
    images={images}
    sections={sections}
    links={links}
  />
)

export default arrow2ndGithubIo
