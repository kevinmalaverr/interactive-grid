import React, { useEffect, useState } from "react"
import "./styles.css"
import { range } from "../../utils/arrays"
import setGridLines from "../../utils/setGridLines"

const alignment = {
  justifyContent: ["start", "center", "end"],
  alignContent: ["start", "center", "end"],
  justifyItems: [],
  alignItems: [],
  justifySelf: [],
  alignSelf: [],
}

const defaultStyle = {
  justifyContent: "center",
  alignContent: "end",
  justifyItems: "stretch",
  alignItems: "stretch",
  justifySelf: "stretch",
  alignSelf: "stretch",
}

const Base = ({ type }) => {
  const [style, setStyle] = useState(defaultStyle)

  useEffect(() => {
    // let i = 0
    // const id = setInterval(() => {
    //   setStyle({ ...style, [type]: alignment[type][i] })
    //   i = (i + 1) % alignment[type].length
    // }, 1500)
    // return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const deleteGridLines = setGridLines(type)
    return deleteGridLines
  }, [style])

  return (
    <div className="alignment-container" style={style} id={type}>
      {range(9).map((key) => (
        <div key={key} className="alignment-container__item-container">
          <div className="alignment-container__item" />
        </div>
      ))}
    </div>
  )
}

export default Base
