module.exports = {
  siteMetadata: {
    title: `acnh.pro`,
    description: `A reactive guide made by two idiots`,
    author: `Dash Foster, Jake Rusnak`,
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
    `gatsby-plugin-less`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `anch-pro`,
        start_url: `/`,
        background_color: `#ffecb7`,
        theme_color: 'rgb(124, 201, 195)',
        display: `minimal-ui`,
        icon: `src/images/hazel-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
