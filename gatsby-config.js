/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
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
  ],
}
