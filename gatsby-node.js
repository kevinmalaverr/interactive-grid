const path = require("path")
const generateSearch = require("./src/scripts/generateSearch")
const languagesConfig = require("./src/config/languages.json")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, deletePage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            tableOfContents
            frontmatter {
              type
              title
              slug
              lang
              description
              navigation {
                prev
                next
              }
            }
          }
        }
      }
    }
  `)

  generateSearch(result.data.allMarkdownRemark.edges)

  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    if (node.frontmatter.type === "general") return
    createPage({
      path: `${
        node.frontmatter.lang === languagesConfig.defaultLanguage
          ? ""
          : `/${node.frontmatter.lang}`
      }${node.frontmatter.slug}`,
      component: path.resolve(
        `./src/templates${
          node.frontmatter.slug === "/" ? "/index" : node.frontmatter.slug
        }.js`
      ),
      // values in the context object are passed in as variables to page queries
      context: {
        ...node.frontmatter,
        langPath:
          node.frontmatter.lang === languagesConfig.defaultLanguage
            ? ""
            : `/${node.frontmatter.lang}`,
      },
    })
  })
}
