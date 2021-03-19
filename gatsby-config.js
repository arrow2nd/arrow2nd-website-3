module.exports = {
  siteMetadata: {
    title: `arrow2nd`,
    titleTemplate: `%s | arrow2nd`,
    description: `あろーがつくったものをまとめたサイト`,
    author: `arrow2nd`,
    url: `https://arrow2nd.github.io/`,
    image: `/icons/icon-256x256.png`,
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
        name: `arrow2nd`,
        short_name: `arrow2nd`,
        start_url: `/`,
        background_color: `#faf8f7`,
        theme_color: `#faf8f7`,
        display: `minimal-ui`,
        icon: `src/images/arrow2nd-icon.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`
  ]
}
