import React, { useState } from "react"

const Select = ({ options, onChange, ...props }) => {
  const [value, setValue] = useState(options[0]?.value)

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    if (typeof onChange === "function") onChange(newValue)
  }

  return (
    <select value={value} onChange={handleChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
