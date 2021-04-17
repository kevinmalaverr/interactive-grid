import * as React from "react"
import { graphql } from "gatsby"
import Grid from "../components/Grid"

const IndexPage = ({ data }) => (
  <main>
    <h1 className="text-8xl font-bold text-center mb-4 text-indigo-700 mb-4 animate__animated animate__fadeInUp">
      CSS Grid Layout
    </h1>
    <h2 className="text-6xl font-bold text-center mb-4text-coolGray-800 mb-12 animate__animated animate__fadeInUp">
      {data.markdownRemark.frontmatter.others.headText}
    </h2>
    <Grid />
  </main>
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
        others {
          headText
        }
      }
    }
  }
`

export default IndexPage
