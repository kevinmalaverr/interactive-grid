const path = require("path")

const defaultLang = "en"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              langKey
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    console.log(node)
    createPage({
      path: `${
        node.frontmatter.langKey === defaultLang
          ? ""
          : `/${node.frontmatter.langKey}`
      }${node.frontmatter.slug}`,
      component: path.resolve(
        `./src/pages-with-translations${node.frontmatter.slug}.js`
      ),
      // values in the context object are passed in as variables to page queries
      context: { slug: node.frontmatter.slug, lang: node.frontmatter.langKey },
    })
  })
}
