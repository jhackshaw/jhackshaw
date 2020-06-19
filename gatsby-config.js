/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
  siteMetadata: {
    title: `Jeff Hackshaw`,
    description: `Personal portfolio / blog for Jeff Hackshaw`,
    author: `@jhackshaw`,
    siteUrl: `https://jhackshaw.com`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169218372-1"
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`]
          },
          {
            family: `Roboto Mono`,
            variants: [`300`, `500`, `700`]
          },
          {
            family: `Open Sans`
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeff Hackshaw`,
        short_name: `jhackshaw`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `content/media/favicon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
