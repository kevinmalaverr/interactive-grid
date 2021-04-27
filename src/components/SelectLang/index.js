import React from "react"
import useLanguage from "../../hooks/useLanguage"
import { languages } from "../../config/languages.json"

const SelectLang = () => {
  const { lang, changeLang } = useLanguage()

  const handleChange = ({ target }) => {
    changeLang(target.value)
  }

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="focus:outline-none focus:ring focus:ring-indigo-300"
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  )
}

export default SelectLang
