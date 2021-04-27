import * as React from "react"
import { graphql } from "gatsby"
import Grid from "../components/Grid"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <h1 className="text-8xl font-bold text-center mb-4 text-indigo-700 mb-4 animate__animated animate__fadeInUp">
      CSS Grid Layout
    </h1>
    <h2 className="text-6xl font-bold text-center mb-4text-coolGray-800 mb-12 animate__animated animate__fadeInUp">
      {data.page.frontmatter.others.headText}
    </h2>
    <Grid />
  </Layout>
)

export const query = graphql`
  query($slug: String!, $lang: String!) {
    page: markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $lang } }
    ) {
      ...PageData
      frontmatter {
        others {
          headText
        }
      }
    }
    general: markdownRemark(
      frontmatter: { lang: { eq: $lang }, type: { eq: "general" } }
    ) {
      ...GeneralData
    }
  }
`

export default IndexPage
