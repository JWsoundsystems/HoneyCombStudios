module.exports = {
  siteMetadata: {
    title: `Honey & Comb Salon`,
    description: `WHETHER YOU’RE SEEKING A NEW STYLE, COLOR OR CUT, HONEY & COMB SALON WELCOMES EACH CLIENT AS AN OLD FRIEND...AND WE PROVIDE EXPERTISE TAILORED TO YOUR HAIR TYPE.  WE STAY ON TOP OF THE CURRENT HAIR TRENDS WITH OUR CONTINUING EDUCATION, ALL TO ENSURE WE DELIVER THE MOST BEAUTIFUL HAIR. LET US MAKE YOUR LIFE SWEETER BY VISITING HONEY & COMB SALON TODAY AND FIND OUT WHAT THE BUZZ IS ALL ABOUT.`,
    author: `@jvelvetdisco`,
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
        icon: `src/images/Logo/02_Logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
