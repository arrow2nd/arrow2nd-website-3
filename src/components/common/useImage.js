import { useStaticQuery, graphql } from 'gatsby'

export const useImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: allFile {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return image.edges
}
