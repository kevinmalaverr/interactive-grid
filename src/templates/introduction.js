import React from "react"
import { graphql } from "gatsby"
import SectionLayout from "../components/SectionLayout"
import EditPageButton from "../components/EditPageButton"

const other = ({ data }) => (
  <>
    <SectionLayout>
      <div />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </SectionLayout>
    <EditPageButton config={data.markdownRemark.frontmatter.editOnGithub} />
  </>
)

export const query = graphql`
  query($slug: String!, $lang: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }, lang: { eq: $lang } }) {
      html
      frontmatter {
        description
        lang
        title
        slug
        navigation {
          next
          prev
        }
        editOnGithub {
          message
          url
        }
      }
    }
  }
`

export default other
