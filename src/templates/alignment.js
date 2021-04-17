import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import SEO from "../components/SEO"
import Base from "../components/Alignment/Animation"
import SubSection from "../components/SubSection"
import ContentTable from "../components/ContentTable"
import Interactive from "../components/Alignment/Interactive"
import FooterNav from "../components/FooterNav"
import MdContainer from "../components/MdContainer"
import { splitHtml } from "../utils/strings"
import SectionLayout from "../components/SectionLayout"

const Alignment = ({ data }) => {
  const sections = splitHtml(data.markdownRemark.html)
  return (
    <>
      <SectionLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <MdContainer html={sections[0]} />
            <Base type="content" property="justifyContent" />
          </div>
          <div>
            <MdContainer html={sections[1]} />
            <Base type="content" property="alignContent" />
          </div>
          <div>
            <MdContainer html={sections[2]} />
            <Base type="items" property="justifyItems" />
          </div>
          <div>
            <MdContainer html={sections[3]} />
            <Base type="items" property="alignItems" />
          </div>
          <div>
            <MdContainer html={sections[4]} />
            <Base type="self" property="justifySelf" />
          </div>
          <div>
            <MdContainer html={sections[5]} />
            <Base type="self" property="alignSelf" />
          </div>
        </div>
        <div>
          <div className="text-center">
            <SubSection id="playground">Playground</SubSection>
          </div>
        </div>
        <Interactive />
      </SectionLayout>
    </>
  )
}

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

export default Alignment
