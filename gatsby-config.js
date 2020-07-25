require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Grove Property Solutions`,
    subTitle: `We open doors for you`,
    description: `Professional property management services.Grove Property Solutions offers a range of services for house hunters (both personal and corporate), landlords and property investors and tenants.`,
    author: `@Rosart`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/house-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_SPACEID,
        accessToken: process.env.GATSBY_ACCESSTOKEN,
        forceFullSync: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
