import React from "react"
import "./styles.scss"
import GridItem from "../GridItem"

const Grid = () => (
  <div className="navigation animate__animated animate__fadeIn">
    <GridItem href="/introduction" className="navigation__intro bg-indigo-700">
      Introduccion
    </GridItem>
    <GridItem href="/template" className="navigation__templates bg-indigo-700">
      Template
    </GridItem>
    <GridItem
      href="/template-areas"
      className="navigation__template-areas bg-indigo-700"
    >
      Template Areas
    </GridItem>
    <GridItem href="/alignment" className="navigation__alignment bg-indigo-700">
      Alignment
    </GridItem>
    <GridItem href="/gap" className="navigation__gap bg-indigo-700">
      Gap
    </GridItem>
  </div>
)

export default Grid
