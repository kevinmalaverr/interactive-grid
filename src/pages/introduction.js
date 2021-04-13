import React from "react"
import Header from "../components/Header"
import SubSection from "../components/SubSection"
import ContentTable from "../components/ContentTable"
import SectionLayout from "../components/SectionLayout"
import SEO from "../components/SEO"
import data from "../pageData/introduction"

const { links, title, description, content } = data

const other = () => (
  <>
    <Header name={title} />
    <SEO title={title} description={description} />
    <SectionLayout>
      <ContentTable links={links} />
      <div>
        <p className="my-3 text-lg text-gray-700">{content[0]}</p>
        <p className="my-3 text-lg text-gray-700">{content[1]}</p>
        <p className="my-3 text-lg text-gray-700">{content[2]}</p>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SubSection id="grid-container">Grid Container</SubSection>
            <p className="my-3 text-lg text-gray-700">{content[3]}</p>
          </div>
          <div>
            <SubSection id="grid-container">Grid Item</SubSection>
            <p className="my-3 text-lg text-gray-700">{content[4]}</p>
          </div>
        </div>
      </div>
    </SectionLayout>
  </>
)

export default other
