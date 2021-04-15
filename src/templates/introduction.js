import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import ContentTable from "../components/ContentTable"
import SectionLayout from "../components/SectionLayout"
import SEO from "../components/SEO"
import EditPageButton from "../components/EditPageButton"

const other = ({ data }) => (
  <>
    <Header name={data.title} />
    <SEO title={data.title} description={data.description} />
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
