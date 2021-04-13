import React from "react"
import Header from "../../components/Header"
import SEO from "../../components/SEO"
import Base from "../../components/Alignment/Animation"
import SubSection from "../../components/SubSection"
import ContentTable from "../../components/ContentTable"
import Interactive from "../../components/Alignment/Interactive"
import FooterNav from "../../components/FooterNav"
import data from "../../pageData/alignment"

const { links, title, description, content } = data

const Alignment = () => (
  <>
    <Header name={title} />
    <SEO title={title} description={description} />
    <ContentTable links={links} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <SubSection id="justify-content">justify-content</SubSection>
        <p>{content[0]}</p>
        <Base type="content" property="justifyContent" />
      </div>
      <div>
        <SubSection id="align-content">align-content</SubSection>
        <p>{content[1]}</p>
        <Base type="content" property="alignContent" />
      </div>
      <div>
        <SubSection id="justify-items">justify-items</SubSection>
        <p>{content[2]}</p>
        <Base type="items" property="justifyItems" />
      </div>
      <div>
        <SubSection id="align-items">align-items</SubSection>
        <p>{content[3]}</p>
        <Base type="items" property="alignItems" />
      </div>
      <div>
        <SubSection id="justify-self">justify-self</SubSection>
        <p>{content[4]}</p>
        <Base type="self" property="justifySelf" />
      </div>
      <div>
        <SubSection id="align-self">align-self</SubSection>
        <p>{content[5]}</p>
        <Base type="self" property="alignSelf" />
      </div>
    </div>
    <div>
      <div className="text-center">
        <SubSection id="playground">Playground</SubSection>
      </div>
      <Interactive />
    </div>
    <FooterNav prev="/introduction" next="/gap" />
  </>
)

export default Alignment
