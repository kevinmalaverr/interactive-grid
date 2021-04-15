import React from "react"
import useLanguage from "../../hooks/useLanguage"
import { languages } from "../../config/languages.json"

const SelectLang = () => {
  const [currentLang, _, changeLang] = useLanguage()

  console.log(currentLang)

  const handleChange = ({ target }) => {
    changeLang(target.value)
  }

  return (
    <select value={currentLang} onChange={handleChange}>
      {languages.map((language) => (
        <option value={language}>{language}</option>
      ))}
    </select>
  )
}

export default SelectLang
