import { getSrc } from 'gatsby-plugin-image'
import { useImage } from '../common/useImage'

export const useSeoImage = (filename) => {
  const images = useImage()
  const node = images.find((e) => e.node.relativePath === filename).node

  return getSrc(node)
}
