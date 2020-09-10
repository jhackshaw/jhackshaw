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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: ["gatsby-remark-slug"]
      }
    },
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
            family: `Ubuntu`,
            variants: [`300`, `400`, `500`]
          },
          {
            family: `Roboto Mono`,
            variants: [`300`, `500`, `700`]
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
        icon: `content/media/favicon.png`
      }
    },
    `gatsby-plugin-remove-serviceworker`
  ]
};
