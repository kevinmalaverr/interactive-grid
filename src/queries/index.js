import { graphql } from "gatsby"

export const PageData = graphql`
  fragment PageData on MarkdownRemark {
    html
    frontmatter {
      title
      description
      slug
      lang
      editOnGithub
      navigation {
        prev
        next
      }
    }
  }
`

export const GeneralData = graphql`
  fragment GeneralData on MarkdownRemark {
    frontmatter {
      description
      lang
      title
      type
      editOnGithub
      banner {
        collaborate
        language
      }
      footerNav {
        prev
        next
      }
    }
  }
`
