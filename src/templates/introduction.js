import React from "react"
import { graphql } from "gatsby"
import SectionLayout from "../components/SectionLayout"
import EditPageButton from "../components/EditPageButton"
import PageWrapper from "../components/PageWrapper"
import { pageQuery } from "../queries"

export const query = graphql`
  query($slug: String!, $lang: String!) {
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

const other = ({ data }) => {
  console.log(data)
  return (
    <PageWrapper data={data}>
      <SectionLayout>
        <div />
        <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
      </SectionLayout>
      <EditPageButton config={data.page.frontmatter.editOnGithub} />
    </PageWrapper>
  )
}

export default other
