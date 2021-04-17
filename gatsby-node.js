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
    deletePage()
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
        slug: node.frontmatter.slug,
        lang: node.frontmatter.lang,
        langPath:
          node.frontmatter.lang === languagesConfig.defaultLanguage
            ? ""
            : `/${node.frontmatter.lang}`,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        navigation: node.frontmatter.navigation,
        others: node.frontmatter.others,
      },
    })
  })
}
