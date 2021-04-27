import React from "react"
import { graphql } from "gatsby"
import SectionLayout from "../components/SectionLayout"
import EditPageButton from "../components/EditPageButton"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!, $lang: String!) {
    page: markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $lang } }
    ) {
      ...PageData
    }
    general: markdownRemark(
      frontmatter: { lang: { eq: $lang }, type: { eq: "general" } }
    ) {
      ...GeneralData
    }
  }
`

const other = ({ data }) => (
  <Layout data={data}>
    <SectionLayout>
      <div />
      <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
    </SectionLayout>
    <EditPageButton
      url={data.page.frontmatter.editOnGithub}
      message={data.general.frontmatter.editOnGithub}
    />
  </Layout>
)

export default other
