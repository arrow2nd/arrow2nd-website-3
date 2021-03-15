module.exports = {
  siteMetadata: {
    title: `Cat Hat`,
    titleTemplate: `%s | Cat Hat`,
    description: `あろーがつくったものをまとめたサイト`,
    author: `arrow2nd`,
    url: `https://arrow2nd.github.io/`,
    image: `/icons/icon-96x96.png`,
    twitterUsername: `@arrow_2nd`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cat-Hat`,
        short_name: `Cat-Hat`,
        start_url: `/`,
        background_color: `#663399`, // TODO: 後で変える
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arrow2nd-icon.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`
  ]
}
