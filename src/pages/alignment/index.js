import React from "react"
import Header from "../../components/Header"
import SEO from "../../components/SEO"
import Base from "../../components/Alignment/Animation"
import SubSection from "../../components/SubSection"
import ContentTable from "../../components/ContentTable"
import Interactive from "../../components/Alignment/Interactive"
import FooterNav from "../../components/FooterNav"

const Alignment = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <SubSection id="justify-content">justify-content</SubSection>
        <p>dsfsdfsdfsdf dfsdf</p>
        <Base type="content" property="justifyContent" />
      </div>
      <div>
        <SubSection id="align-content">align-content</SubSection>
        <p>dsfsdfsdfsdf dfsdf</p>
        <Base type="content" property="alignContent" />
      </div>
      <div>
        <SubSection id="justify-items">justify-items</SubSection>
        <p>dsfsdfsdfsdf dfsdf</p>
        <Base type="items" property="justifyItems" />
      </div>
      <div>
        <SubSection id="align-items">align-items</SubSection>
        <p>dsfsdfsdfsdf dfsdf</p>
        <Base type="items" property="alignItems" />
      </div>
      <div>
        <SubSection id="justify-self">justify-self</SubSection>
        <p>dsfsdfsdfsdf dfsdf</p>
        <Base type="self" property="justifySelf" />
      </div>
      <div>
        <SubSection id="align-self">align-self</SubSection>
        <p>dsfsdfsdfsdf dfsdf</p>
        <Base type="self" property="alignSelf" />
      </div>
    </div>
    <div>
      <div className="text-center">
        <SubSection id="playground">Playground</SubSection>
      </div>
    </div>
    <Interactive />
    <FooterNav prev="/introduction" next="/gap" />
  </>
)

export default Alignment
