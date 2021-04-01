import React from "react"
import "./styles.css"

const Self = ({ style }) => {
  console.log(style)
  return (
    <div className="alignment-container" style={style}>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
      <div className="alignment-container__item-container">
        <div className="alignment-container__item" />
      </div>
    </div>
  )
}

export default Self
