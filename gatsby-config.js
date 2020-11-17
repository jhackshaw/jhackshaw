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
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600
            }
          },
          "gatsby-remark-slug"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169218372-1"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu\:300,400,500`,
          `Roboto Mono\:300,500,700`
        ],
        display: 'swap'
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
