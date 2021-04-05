import React, { useEffect, useState } from "react"
import "./styles.css"
import { range } from "../../utils/arrays"
import Code from "../CodeBlock"
import { camelToKebab } from "../../utils/strings"

const code = (prop, value, type) => `
  .${type === "self" ? "item" : "container"} {
    ${camelToKebab(prop)}: ${value};
  }
`
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
  items: ["stretch", "start", "center", "end"],
  self: ["stretch", "start", "center", "end"],
}

const defaultStyle = {
  content: {
    justifyContent: "stretch",
    alignContent: "stretch",
  },
  items: {
    justifyItems: "stretch",
    alignItems: "stretch",
  },
  self: {
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
}

const Base = ({ type, property }) => {
  const [style, setStyle] = useState(defaultStyle)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setStyle({
        ...style,
        [type]: { ...style[type], [property]: alignment[type][i] },
      })
      i = (i + 1) % alignment[type].length
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <Code
        source={code(property, style[type][property], type)}
        language="css"
      />
      <div
        className="alignment-container max-w-sm m-auto"
        style={style.content}
      >
        {range(9).map((key) => (
          <div
            key={key}
            className="alignment-container__item-container"
            style={style.items}
          >
            <div
              className="alignment-container__item"
              style={key === 4 && type === "self" ? style.self : {}}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Base
