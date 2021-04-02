import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"
import Base from "../components/Alignment/Base"

const options = ["start", "center", "end"]

const Alignment = () => (
  // const [selection, setSelection] = useState()

  // useEffect(() => {
  //   let i = 0
  //   const id = setInterval(() => {
  //     setSelection(options[i])
  //     i = (i + 1) % options.length
  //   }, 1500)

  //   return () => clearInterval(id)
  // }, [])

  // function handleChange(e) {
  //   setSelection(e.target.value)
  // }

  <>
    <Header name="Template areas" />
    <SEO title="Introduction" />
    {/* justify-content
      <select value={selection} onChange={handleChange}>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
      <Self style={{ justifyContent: selection }} /> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Base type="justifyContent" />
      <Base type="alignContent" />
    </div>
  </>
)

export default Alignment
