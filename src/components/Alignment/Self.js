import React from "react"
import "./styles.css"
import { range } from "../../utils/arrays"

const Self = ({ style }) => (
  <div className="alignment-container" style={style}>
    {range(9).map((key) => (
      <div key={key} className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
    ))}
  </div>
)

export default Self
