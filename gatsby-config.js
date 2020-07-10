require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: "/nahuel-web",
  siteMetadata: {
    title: `Nahuel Luca Desarrolador Web`,
    description: `Soy desarrollador web, trabajo con tecnologías como React, Gatsby y Node.
    Si necesita una página web yo lo puedo ayudar`,
    author: `@nahuel`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nahuel Luca`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/nahuel-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
