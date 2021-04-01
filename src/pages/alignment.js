import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"
import Self from "../components/Alignment/Self"

const options = ["start", "center", "end"]

const Alignment = () => {
  const [selection, setSelection] = useState()

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setSelection(options[i])
      i = (i + 1) % options.length
    }, 1500)

    return () => clearInterval(id)
  }, [])

  function handleChange(e) {
    setSelection(e.target.value)
  }

  return (
    <>
      <Header name="Template areas" />
      <SEO title="Introduction" />
      justify-content
      <select value={selection} onChange={handleChange}>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
      <Self style={{ justifyContent: selection }} />
    </>
  )
}
export default Alignment
