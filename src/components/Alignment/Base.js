import React, { useEffect, useState } from "react"
import "./styles.css"
import { range } from "../../utils/arrays"
import { useInspector } from "../../hooks/useInspector"

const alignment = {
  content: [
    "start",
    "center",
    "end",
    "stretch",
    "space-around",
    "space-between",
    "space-evenly",
  ],
  items: ["start", "center", "end"],
}

const defaultStyle = {
  content: {
    justifyContent: "space-between",
    alignContent: "stretch",
  },
  items: {
    justifyItems: "stretch",
    alignItems: "stretch",
  },
}

const Base = ({ type, property }) => {
  const [style, setStyle] = useState(defaultStyle)
  const ref = useInspector([style])

  // useEffect(() => {
  //   let i = 0
  //   const id = setInterval(() => {
  //     setStyle({
  //       ...style,
  //       [type]: { ...style[type], [property]: alignment[type][i] },
  //     })
  //     i = (i + 1) % alignment[type].length
  //   }, 1500)
  //   return () => clearInterval(id)
  // }, [])

  return (
    <div className="alignment-container" style={style.content} ref={ref}>
      {range(9).map((key) => (
        <div
          key={key}
          className="alignment-container__item-container"
          style={style.items}
        >
          <div className="alignment-container__item" style={style.self} />
        </div>
      ))}
    </div>
  )
}

export default Base
