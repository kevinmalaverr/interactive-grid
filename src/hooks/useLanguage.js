import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import languagesConfig from "../config/languages.json"

const useLanguage = () => {
  const { pathname } = useLocation()
  const regex = new RegExp(`/(${languagesConfig.languages.join("|")})/`)

  const match = pathname.match(regex)

  const changeLang = (langCode) => {
    const langPath =
      langCode === languagesConfig.defaultLanguage ? "" : `/${langCode}`
    navigate(match ? langPath + pathname.slice(3) : langPath + pathname)
  }

  if (match) {
    return {
      lang: match[1],
      langPath: pathname.slice(0, 3),
      changeLang,
    }
  }

  return {
    lang: languagesConfig.defaultLanguage,
    langPath: "",
    changeLang,
  }
}

export default useLanguage
