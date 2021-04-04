import React from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"
import Base from "../components/Alignment/Base"

const Alignment = () => (
  <>
    <Header name="Template areas" />
    <SEO title="Introduction" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Base type="content" property="justifyContent" />
      <Base type="content" property="alignContent" />
      <Base type="items" property="justifyItems" />
      <Base type="items" property="alignItems" />
      {/* <Base type="alignContent" />
      <Base type="alignContent" /> */}
    </div>
  </>
)

export default Alignment
