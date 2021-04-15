import React from "react"
import Markdown from "markdown-to-jsx"
import { graphql } from "gatsby"
import Header from "../components/Header"
import SubSection from "../components/SubSection"
import ContentTable from "../components/ContentTable"
import SectionLayout from "../components/SectionLayout"
import SEO from "../components/SEO"
import data from "../pageData/introduction"

const { links, title, description, content } = data

const other = ({ data }) => (
  <>
    <Header name={title} />
    <SEO title={title} description={description} />
    <SectionLayout>
      <div />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </SectionLayout>
  </>
)

export const query = graphql`
  query($slug: String!, $lang: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, langKey: { eq: $lang } }
    ) {
      html
      frontmatter {
        description
        langKey
        title
        slug
        navigation {
          next
          prev
        }
      }
    }
  }
`

export default other
