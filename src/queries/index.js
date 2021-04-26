import { graphql } from "gatsby"

export const PageData = graphql`
  fragment PageData on MarkdownRemark {
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
`

export const GeneralData = graphql`
  fragment GeneralData on MarkdownRemark {
    frontmatter {
      description
      lang
      title
      type
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
