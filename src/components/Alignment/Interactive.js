import React, { useEffect, useState } from "react"
import "./styles.css"
import { range } from "../../utils/arrays"
import { useInspector } from "../../hooks/useInspector"
import Select from "../Select"

const alignment = {
  content: [
    "stretch",
    "start",
    "center",
    "end",
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
}

const Base = ({ type, property }) => {
  const [style, setStyle] = useState(defaultStyle)
  const ref = useInspector([style])

  const handleChange = (type, prop) => (value) => {
    setStyle({ ...style, [type]: { ...style[type], [prop]: value } })
  }

  return (
    <div>
      <div className="grid grid-flow-col gap-4 grid-rows-6 md:grid-rows-2 mb-6">
        <div>
          <p className="text-lg mb-1">justify-content</p>
          <Select
            options={alignment.content.map((prop) => ({
              value: prop,
              label: prop,
            }))}
            onChange={handleChange("content", "justifyContent")}
          />
        </div>
        <div>
          <p className="text-lg mb-1">align-content</p>
          <Select
            options={alignment.content.map((prop) => ({
              value: prop,
              label: prop,
            }))}
            onChange={handleChange("content", "alignContent")}
          />
        </div>
        <div>
          <p className="text-lg mb-1">justify-items</p>
          <Select
            options={alignment.items.map((prop) => ({
              value: prop,
              label: prop,
            }))}
            onChange={handleChange("items", "justifyItems")}
          />
        </div>
        <div>
          <p className="text-lg mb-1">align-items</p>
          <Select
            options={alignment.items.map((prop) => ({
              value: prop,
              label: prop,
            }))}
            onChange={handleChange("items", "alignItems")}
          />
        </div>
        <div>
          <p className="text-lg mb-1">justify-self</p>
          <Select
            options={alignment.self.map((prop) => ({
              value: prop,
              label: prop,
            }))}
            onChange={handleChange("self", "justifySelf")}
          />
        </div>
        <div>
          <p className="text-lg mb-1">align-self</p>
          <Select
            options={alignment.self.map((prop) => ({
              value: prop,
              label: prop,
            }))}
            onChange={handleChange("self", "alignSelf")}
          />
        </div>
      </div>
      <div
        className="alignment-container alignment-container--playground"
        style={style.content}
        ref={ref}
      >
        {range(9).map((key) => (
          <div
            key={key}
            className="alignment-container__item-container"
            style={style.items}
          >
            <div
              className="alignment-container__item"
              style={key === 4 ? style.self : {}}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Base
