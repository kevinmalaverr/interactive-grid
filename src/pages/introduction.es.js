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
  query {
    markdownRemark(
      frontmatter: { slug: { eq: "/introduction" }, langKey: { eq: "es" } }
    ) {
      html
      frontmatter {
        slug
        title
        navigation {
          prev
          next
        }
        description
        langKey
      }
    }
  }
`

export default other
