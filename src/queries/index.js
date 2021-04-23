import { graphql } from "gatsby"

export const pageQuery = () => `
  query ($slug: String!, $lang: String!) {
    page: markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
        description
        slug
        lang
        editOnGithub {
          message
          url
        }
        navigation {
          prev
          next
        }
      }
    }
    general: markdownRemark(
      frontmatter: { lang: { eq: $lang }, type: { eq: "general" } }
    ) {
      frontmatter {
        description
        lang
        title
        type
      }
    }
  }
`
