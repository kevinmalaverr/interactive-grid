module.exports = {
  siteMetadata: {
    title: "Interactive Grid",
    titleTemplate: "%s · Interactive Grid",
    description: "An interactive guide of CSS Grid",
    url: "https://interactive-grid.vercel.app", // No trailing slash allowed!
    image: "/images/preview.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      // query: `
      //     {
      //       allMarkdownRemark {
      //         edges {
      //           node {
      //             fields {
      //               slug,
      //               langKey
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `,
    },
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: "en",
    //     useLangKeyLayout: false,
    //   },
    // },
  ],
}
