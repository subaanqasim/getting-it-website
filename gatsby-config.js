/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteName: `Getting It`,
    title: `The Podcast About Learning Everything`,
    siteUrl: `https://www.gettingit.co.uk`,
    description: `Getting It is a podcast where we try to understand life just a little bit more. Hosted by Subaan Qasim and Daniel Redfearn, we explore topics both familiar and unfamiliar to us to find out what makes them interesting, so that we can expand our horizons and further our understanding of the world and people around us.`,
    social: {
      twitter: `https://twitter.com/gettingit_pod`,
      instagram: `https://instagram.com/gettingit_pod`,
      twitterUsername: `@gettingit_pod`,
      email: `thoughts@gettingit.co.uk`,
    },
  },

  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA4_MEASUREMENT_ID,
          cookieName: `giAnalytics`,
          anonymize: true,
        },
        environments: [`production`],
      },
    },
    `gatsby-plugin-mantine`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Getting It`,
        short_name: `Getting It`,
        start_url: `/`,
        background_color: `#101113`,
        theme_color: `#f4a82c`,
        display: `standalone`,
        icon: `./src/assets/images/getting-it-logo.svg`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/copy`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              withWebp: true,
              loading: `lazy`,
            },
          },
        ],
        rehypePlugins: [require(`rehype-slug`)],
      },
    },

    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        language: `en`,
        titleTemplate: `%s | Getting It`,
        openGraph: {
          type: `website`,
          locale: `en_GB`,
          site_name: `Getting It`,
        },
        twitter: {
          handle: `@gettingit_pod`,
          site: `@gettingit_pod`,
          cardType: `summary_large_image`,
        },
      },
    },
  ],
}
