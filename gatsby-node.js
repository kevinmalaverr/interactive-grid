const path = require("path")
const generateSearch = require("./src/scripts/generateSearch")

const defaultLang = "en"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            tableOfContents
            frontmatter {
              slug
              lang
            }
          }
        }
      }
    }
  `)

  generateSearch(result.data.allMarkdownRemark.edges)

  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    createPage({
      path: `${
        node.frontmatter.lang === defaultLang ? "" : `/${node.frontmatter.lang}`
      }${node.frontmatter.slug}`,
      component: path.resolve(`./src/i18n-pages${node.frontmatter.slug}.js`),
      // values in the context object are passed in as variables to page queries
      context: { slug: node.frontmatter.slug, lang: node.frontmatter.lang },
    })
  })
}
