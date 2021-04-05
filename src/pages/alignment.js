import React from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"
import Base from "../components/Alignment/Animation"
import SubSection from "../components/SubSection"
import ContentTable from "../components/ContentTable"
import Interactive from "../components/Alignment/Interactive"

const links = [
  { id: "justify-content", name: "justify-content" },
  { id: "align-content", name: "align-content" },
  { id: "justify-items", name: "justify-items" },
  { id: "align-items", name: "align-items" },
  { id: "justify-self", name: "justify-self" },
  { id: "align-self", name: "align-self" },
  { id: "playground", name: "Playground" },
]

const Alignment = () => (
  <>
    <Header name="Alignment" />
    <SEO title="Alignment" />
    <ContentTable links={links} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <SubSection id="justify-content">justify-content</SubSection>
        <p>
          Sometimes the total size of your grid might be less than the size of
          its grid container. This could happen if all of your grid items are
          sized with non-flexible units like px. In this case you can set the
          alignment of the grid within the grid container. This property aligns
          the grid along the inline (row) axis (as opposed to align-content
          which aligns the grid along the block (column) axis).
        </p>
        <Base type="content" property="justifyContent" />
      </div>
      <div>
        <SubSection id="align-content">align-content</SubSection>
        <p>
          Sometimes the total size of your grid might be less than the size of
          its grid container. This could happen if all of your grid items are
          sized with non-flexible units like px. In this case you can set the
          alignment of the grid within the grid container. This property aligns
          the grid along the block (column) axis (as opposed to justify-content
          which aligns the grid along the inline (row) axis).
        </p>
        <Base type="content" property="alignContent" />
      </div>
      <div>
        <SubSection id="justify-items">justify-items</SubSection>
        <p>
          Aligns grid items along the inline (row) axis (as opposed to
          align-items which aligns along the block (column) axis). This value
          applies to all grid items inside the container.
        </p>
        <Base type="items" property="justifyItems" />
      </div>
      <div>
        <SubSection id="align-items">align-items</SubSection>
        <p>
          Aligns grid items along the block (column) axis (as opposed to
          justify-items which aligns along the inline (row) axis). This value
          applies to all grid items inside the container.
        </p>
        <Base type="items" property="alignItems" />
      </div>
      <div>
        <SubSection id="justify-self">justify-self</SubSection>
        <p>
          Aligns a grid item inside a cell along the inline (row) axis (as
          opposed to align-self which aligns along the block (column) axis).
          This value applies to a grid item inside a single cell.
        </p>
        <Base type="self" property="justifySelf" />
      </div>
      <div>
        <SubSection id="align-self">align-self</SubSection>
        <p>
          Aligns a grid item inside a cell along the block (column) axis (as
          opposed to justify-self which aligns along the inline (row) axis).
          This value applies to the content inside a single grid item.
        </p>
        <Base type="self" property="alignSelf" />
      </div>
    </div>
    <div>
      <div className="text-center">
        <SubSection id="playground">Playground</SubSection>
      </div>
      <Interactive />
    </div>
  </>
)

export default Alignment
