import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = ['works/other/totsuzen-1.png', 'works/other/totsuzen-2.png']

const sections = [
  {
    title: '概要',
    text: ' LINEから ＞ 突然の死 ＜ がぱぱっとつくれるLINEBotです'
  },
  {
    title: '使用技術',
    text: 'Node.js / LINE Messaging API / Vercel'
  }
]

const links = [
  {
    name: 'ソースをみる',
    icon: 'github',
    color: 'black',
    href: 'https://github.com/arrow2nd/linebot-totsuzennoshi'
  },
  {
    name: '友だち登録',
    icon: 'linechat',
    color: 'green',
    href: 'https://lin.ee/2OnfDEwtE'
  }
]

const Totsuzen = () => (
  <Detail
    category="other"
    title="突然の死ジェネレーター"
    images={images}
    sections={sections}
    links={links}
  />
)

export default Totsuzen
